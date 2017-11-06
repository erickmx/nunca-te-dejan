
import { Router, Express } from 'express'

import DriversRoute from './driver'
import ClientsRoute from './client'
import EmployeRoute from './employee'

export default (app:Express) : void => {

  const apiRoutes = Router()

  apiRoutes.use('/driver', DriversRoute(app))
  apiRoutes.use('/client', ClientsRoute(app))
  apiRoutes.use('/employee', EmployeRoute(app))

  app.use('/api', apiRoutes)

}
