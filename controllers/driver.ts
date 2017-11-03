import Driver from '../models/driver'
import { Request, Response, NextFunction } from 'express'

// getAll
export const getAllDrivers = (req:Request, res:Response, next:NextFunction) : void => {

  Driver.find((err:any, drivers:Document[]) : void => {

    err? res.status(500).json({err}) : res.status(200).json({drivers})

  })

}

// getOne
export const getDriverByName = (req:Request, res:Response, next:NextFunction) : void => {

  const name = req.params.name
  Driver.findOne({name}, (err:any, driver:Document) : void => {

    err? res.status(500).json({err}) : res.status(200).json({driver})

  })

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
    // res.status(422).json({err: 'status is required'})
    // return
    status = 'Libre'
  }

  const newDriver = new Driver({
    name,
    phoneNumber
  })

  newDriver.save((err:any, driver) : void => {

    err? res.status(500).json({err}) : res.status(200).json({driver})

  })

}

export const updateDriver = (req:Request, res:Response, next:NextFunction) : void => {

  const name = req.params.name
  Driver.findOneAndUpdate({name}, req.body , (err:any, driver) : void => {

    err? res.status(500).json({err}) : res.status(200).json({driver})

  })

}

export const deleteDriver = (req:Request, res:Response, next:NextFunction) : void => {

  const name = req.params.name
  Driver.findOneAndRemove({name}, (err:any, driver) : void => {

    if (err) {
      res.status(200).json({err})
    }

  })

}
