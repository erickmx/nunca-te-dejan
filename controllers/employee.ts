
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

  let {
    rfc,
    name,
    addres,
    phoneNumber,
    email,
    area,
    status
  } = req.body

  if (!rfc) {
    res.status(402).json({err: 'RFC is requred'})
    return
  }

  if (!name) {
    res.status(402).json({err: 'Name is required'})
    return
  }

  if (!addres) {
    addres = ''
  }
  if (!email) {
    res.status(402).json({err: 'Email is required'})
    return
  }

  if (!area) {
    res.status(402).json({err: 'Area is required'})
    return
  }

  if (!status) {
    status = 'activo'
  }

  const newEmployee = new Employee({
    rfc,
    name,
    addres,
    phoneNumber,
    email,
    area,
    status
  })

  newEmployee.save()
    .then(employee => res.status(200).json({employee}))
    .catch(err => res.status(500).json({err}))

}

const updateEmployee = (req:Request, res:Response, next:NextFunction) : void => {

  const rfc = req.params.rfc
  Employee.findOneAndUpdate({rfc}, req.body)
    .then(employee => res.status(200).json({employee}))
    .catch(err => res.status(500).json({err}))

}

const deleteEmployee = (req:Request, res:Response, next:NextFunction) : void => {

  const rfc = req.params.rfc
  Employee.findOneAndRemove({rfc})
    .then(employee => res.status(200).json({employee}))
    .catch(err => res.status(500).json({err}))

}
