
import {
    getAllEmployees,
    getEmployeeByRFC,
    postEmployee,
    updateEmployee,
    deleteEmployee
} from '../controllers/employee'

import { Router, Express } from 'express'

export default (app:Express) : Router => {

  const employeeRoute = Router()

  employeeRoute
    .get('/', getAllEmployees)
    .get('/:rfc', getEmployeeByRFC)
    .post('/', postEmployee)
    .put('/:rfc', updateEmployee)
    .delete('/:rfc', deleteEmployee)

    return employeeRoute

}
