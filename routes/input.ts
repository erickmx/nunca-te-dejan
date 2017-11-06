import {
  getAllInputs,
  getInputById,
  postInput,
  updateInput,
  deleteInput
} from '../controllers/input'

import { Router, Express } from 'express'

export default (app:Express) : Router => {

  const inputRouter:Router = Router()

  inputRouter
    .get('/', getAllInputs)
    .get('/:idInput', getInputById)
    .post('/', postInput)
    .put('/:idInput', updateInput)
    .delete('/:idInput', deleteInput)

  return inputRouter

}
