
import { Router, Express } from 'express'

import DriversRoute from './driver'

export default (app:Express) : void => {

  const apiRoutes = Router()

  apiRoutes.use('/driver', DriversRoute(app))

  app.use('/api', apiRoutes)

}
