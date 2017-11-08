import {
  getAllRents,
  getRentByFolio,
  postRent,
  updateRent,
  deleteRent
} from '../controllers/rent'

import { Router, Express } from 'express'

export default (app:Express) : Router => {

  const rentRouter = Router()

  rentRouter
    .get('/', getAllRents)
    .get('/:folio', getRentByFolio)
    .post('/', postRent)
    .put('/:folio', updateRent)
    .delete('/:folio', deleteRent)

  return rentRouter

}
