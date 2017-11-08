
import {
  getAllVehicles,
  getVehicleByPlacas,
  postVehicle,
  updateVehicle,
  deleteVehicle
} from '../controllers/vehicle'

import { Router, Express } from 'express'

export default (app:Express) : Router => {

  const driverRouter = Router()

  driverRouter
    .get('/', getAllVehicles)
    .get('/:placas', getVehicleByPlacas)
    .post('/', postVehicle)
    .put('/:placas', updateVehicle)
    .delete('/:placas', deleteVehicle)

  return driverRouter
}
