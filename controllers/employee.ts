
import Employee from '../models/employee'
import { Request, Response, NextFunction } from 'express'

export const getAllEmployees = (req:Request, res:Response, next:NextFunction) : void => {

  Employee.find()
    .then(employee => res.status(200).json({employee}))
    .catch(err => res.status(500).json({err}))

}

export const getEmployeeByRFC = (req:Request, res:Response, next:NextFunction) : void => {

  const rfc = req.params.rfc
  Employee.findOne({rfc})
    .then(employee => res.status(200).json({employee}))
    .catch(err => res.status(500).json({err}))

}

export const postEmployee = (req:Request, res:Response, next:NextFunction) :void => {

  

}
