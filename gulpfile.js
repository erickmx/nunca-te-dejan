const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps"); // So Istanbul is able to map the code
const tsProject = require("gulp-typescript").createProject("tsconfig.json");
const vfs = require("vinyl-fs");
const apidoc = require("gulp-apidoc");

const paths = {
    tocopy: ["./**", "!./build", "!./build/**", "!./**/*.ts", "!./.vscode", "!./.vscode/**", "!./gulpfile.js", "!./*.log", "!./*.lock", "!./*.md", "!./*.json", "!./*.yml", "!./LICENSE",
        "!./test/**/*.ts", "!./test/mocha.opts", "!./routes/**apidoc**", "!./tasks", "!./tasks/**", "!./node_modules", "!./node_modules/**", "!./build", "!./build/**"
    ],
    tsfiles: ["./config", "./controllers", "./models", "./routes/*.ts", "./test"]
};

gulp.task("apidoc", (done) => {
    apidoc({
        src: "./routes",
        dest: "../docs/apidoc"
    }, done);
});

gulp.task("copy", () => {
    return vfs.src(paths.tocopy, {
            dot: true
        })
        .pipe(vfs.dest("./build"));
});

gulp.task("transpile", () => {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject()).js
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./build"));
});

gulp.task("default", ["copy", "transpile"], (done) => done());

gulp.task("watch", () => {
    gulp.watch(["./routes/**"], ["apidoc"]);
    gulp.watch(paths.tsfiles, ["transpile"]);
});
