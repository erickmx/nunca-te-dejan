import Vehicle from '../models/vehicle'
import { Request, Response, NextFunction } from 'express'

export const getAllVehicles = (req:Request, res:Response, next:NextFunction) : void => {

  Vehicle.find()
    .then(vehicle => res.status(200).json({vehicle}))
    .catch(err => res.status(500).json({err}))

}

export const getVehicleByPlacas = (req:Request, res:Response, next:NextFunction) : void => {

  const placas = req.params.placas
  Vehicle.findOne({placas})
    .then(vehicle => res.status(200).json({vehicle}))
    .catch(err => res.status(500).json({err}))

}

export const postVehicle = (req:Request, res:Response, next:NextFunction) : void => {
  let {
    placas,
    linea,
    marca,
    model,
    kilometraje,
    status,
    priceMonth,
    priceWeek,
    priceDay
  } = req.body

  if (!placas) {
    res.status(402).json({err: 'placas is required'})
    return
  }
  if (!linea) {
    res.status(402).json({err: 'linea is required'})
    return
  }
  if (!marca) {
    res.status(402).json({err: 'marca is required'})
    return
  }
  if (!model) {
    res.status(402).json({err: 'model is required'})
    return
  }
  if (!priceMonth) {
    res.status(402).json({err: 'priceMonth is required'})
    return
  }
  if (!priceWeek) {
    res.status(402).json({err: 'placas priceWeek required'})
    return
  }
  if (!priceDay) {
    res.status(402).json({err: 'priceDay is required'})
    return
  }

  const newVehicle = new Vehicle({
    placas,
    linea,
    marca,
    model,
    kilometraje,
    status,
    priceMonth,
    priceWeek,
    priceDay
  })

  newVehicle.save()
    .then(vehicle => res.status(200).json({vehicle}))
    .catch(err => res.status(500).json({err}))

}

export const updateVehicle = (req:Request, res:Response, next:NextFunction) : void => {

  const placas = req.params.placas
  Vehicle.findOneAndUpdate({placas}, req.body)
    .then(vehicle => res.status(200).json({vehicle}))
    .catch(err => res.status(500).json({err}))

}

export const deleteVehicle = (req:Request, res:Response, next:NextFunction) : void => {

  const placas = req.params.placas
  Vehicle.findOneAndRemove({placas})
    .then(vehicle => res.status(200).json({vehicle}))
    .catch(err => res.status(500).json({err}))

}
