import { Router, Express } from 'express'

import {
  getAllDrivers,
  getDriverByName,
  postDriver,
  updateDriver,
  deleteDriver
 } from '../controllers/driver'

 export default (app:Express) : Router => {

   const driverRoutes:Router = Router()

   driverRoutes
    .get('/', getAllDrivers)
    .get('/:name', getDriverByName)
    .post('/', postDriver)
    .put('/:name', updateDriver)
    .delete('/:name', deleteDriver)

    return driverRoutes

 }
