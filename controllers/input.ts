import Input from '../models/input'
import { Request, Response, NextFunction } from 'express'

export const getAllInputs = (req:Request, res:Response, next:NextFunction) : void => {

  Input.find()
    .then(inputs => res.status(200).json({inputs}))
    .catch(err => res.status(500).json({err}))

}

export const getInputById = (req:Request, res:Response, next:NextFunction) : void => {

  const idInput = req.params.idInput
  Input.findById(idInput)
    .then(input => res.status(200).json({input}))
    .catch(err => res.status(500).json({err}))

}

export const postInput = (req:Request, res:Response, next:NextFunction) : void => {

  let {
    description,
    typeProduct,
    price,
    stock,
    stockMin,
    stockMax,
    status
  } = req.body

  if (!description) {
    res.status(402).json({err: 'Description is required'})
    return
  }
  if (!typeProduct) {
    res.status(402).json({err: 'Type is required'})
    return
  }
  if (!price) {
    price = 0
  }
  if (!stock) {
    stock = 0
  }
  if (!stockMin) {
    stockMin = 0
  }
  if (!stockMax) {
    stockMax = 0
  }
  if (!status) {
    status = 'agotado'
  }

  const newInput = new Input({
    description,
    typeProduct,
    price,
    stock,
    stockMin,
    stockMax,
    status
  })

  newInput.save()
    .then(input => res.status(200).json({input}))
    .catch(err => res.status(500).json({err}))

}

export const updateInput = (req:Request, res:Response, next:NextFunction) : void => {

  const idInput = req.params.idInput
  Input.findByIdAndUpdate(idInput, req.body)
    .then(input => res.status(200).json({input}))
    .catch(err => res.status(500).json({err}))

}

export const deleteInput = (req:Request, res:Response, next:NextFunction) : void => {

  const idInput = req.params.idInput
  Input.findByIdAndRemove(idInput)
    .then(input => res.status(200).json({input}))
    .catch(err => res.status(500).json({err}))

}
