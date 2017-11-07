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

  const newVehicle = new Vehicle({

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
