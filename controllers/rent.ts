
import Rent from '../models/rent'
import { Request, Response, NextFunction } from 'express'

export const getAllRents = (req:Request, res:Response, next:NextFunction) : void => {

  res.status(200).json({rents: 'cooming son'})

}

export const getRentByFolio = (req:Request, res:Response, next:NextFunction) : void => {

  res.status(200).json({rent: 'cooming son'})

}

export const postRent = (req:Request, res:Response, next:NextFunction) : void => {

  res.status(200).json({rent: 'cooming son'})

}

export const updateRent = (req:Request, res:Response, next:NextFunction) : void => {

  res.status(200).json({rent: 'cooming son'})

}

export const deleteRent = (req:Request, res:Response, next:NextFunction) : void => {

  res.status(200).json({rent: 'cooming son'})

}
