// General use
import * as express from 'express'
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as logger from 'morgan'
import * as helmet from 'helmet'
import * as cors from 'cors'
import * as Promise from 'bluebird'

// Made by me
import config from './config'
import routes from './routes'

// init express
const app = express()

// init moongose
// mongoose.Promise = Promise
mongoose.connect(config.db, {
  promiseLibrary: Promise,
  useMongoClient: true
})

// express middlewares

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(logger('dev'))
app.use(helmet())
app.use(cors())

// router
routes(app)

// init server

let server

if (process.env.NODE_ENV !== config.test_env) {
    server = app.listen(config.port, () => {
      console.log(`server listening on port ${config.port}`)
    })
} else {
  server = app.listen(config.test_port, () => {
    console.log(`server listening on port ${config.test_port}`)
  })
}
