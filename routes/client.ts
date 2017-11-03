import { Router, Express } from 'express'

import {
  getAllClients,
  getClientById,
  postClient,
  updateClient,
  deleteClient
} from '../controllers/client'

export default (app:Express) : Router => {

  const clientRoutes:Router = Router()

  clientRoutes
    .get('/', getAllClients)
    .get('/:rfc', getClientById)
    .post('/', postClient)
    .put('/:rfc', updateClient)
    .delete('/:rfc', deleteClient)

  return clientRoutes

}
