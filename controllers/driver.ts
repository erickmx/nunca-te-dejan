import Driver from '../models/driver'
import { Request, Response, NextFunction } from 'express'

// getAll
export const getAllDrivers = (req:Request, res:Response, next:NextFunction) : void => {

  Driver.find()
    .then(drivers => res.status(200).json({drivers}))
    .catch(err => res.status(500).json({err}))

}

// getOne
export const getDriverByName = (req:Request, res:Response, next:NextFunction) : void => {

  const name = req.params.name
  Driver.findOne({name})
    .then(driver => res.status(200).json({driver}))
    .catch(err => res.status(500).json({err}))

}

// create
export const postDriver = (req:Request, res:Response, next:NextFunction) : void => {

  const name = req.body.name
  const phoneNumber = req.body.phoneNumber
  let status = req.body.status

  if (!name) {
    res.status(422).json({err: 'name is required'})
    return
  }

  if (!phoneNumber) {
    res.status(422).json({err: 'phone number is required'})
    return
  }

  if (!status) {
    status = 'Libre'
  }

  const newDriver = new Driver({
    name,
    phoneNumber,
    status
  })

  newDriver.save()
    .then(driver => res.status(200).json({driver}))
    .catch(err => res.status(500).json({err}))

}

export const updateDriver = (req:Request, res:Response, next:NextFunction) : void => {

  const name = req.params.name
  Driver.findOneAndUpdate({name}, req.body)
    .then(driver => res.status(200).json({driver}))
    .catch(err => res.status(500).json({err}))

}

export const deleteDriver = (req:Request, res:Response, next:NextFunction) : void => {

  const name = req.params.name
  Driver.findOneAndRemove({name})
    .then(driver => res.status(200).json({driver}))
    .catch(err => res.status(500).json({err}))

}
