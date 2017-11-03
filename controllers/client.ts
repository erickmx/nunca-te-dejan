import Client from '../models/client'
import { Request, Response, NextFunction } from 'express'

export const getAllClients = (req:Request, res:Response, next:NextFunction) : void => {

  Client.find((err:any, clients:Document[]) => {

    err? res.status(500).json({err}) : res.status(200).json({clients})

  })

}

export const getClientById = (req:Response, res:Response, next:NextFunction) : void => {

  Client.findOne((err:any, client:Document) => {

    err? res.status(500).json({err}) : res.status(200).json(client)

  })

}

export const postClient = (req:Request, res:Response, next:NextFunction) : void => {

  const rfc = req.body.rfc
  const name = req.body.name
  const direction = req.body.direction
  const phoneNumber = req.body.phoneNumber
  const email = req.body.email
  const vehiculosacargo = req.body.vehiculosacargo
  const saldo = req.body.saldo
  const status = req.body.status

  if (!rfc) {
    res.status(422).json({err: 'rfc is required'})
    return
  }

  if (!name) {
    res.status(422).json({err: 'name is required'})
    return
  }

  if (!email) {
    res.status(422).json({err: 'email is required'})
    return
  }

  if (!vehiculosacargo) {
    res.status(422).json({err: 'vehiculosacargo is required'})
    return
  }

  if (!saldo) {
    res.status(422).json({err: 'saldo is required'})
    return
  }

  if (!status) {
    res.status(422).json({err: 'status is required'})
    return
  }

  const newClient = new Client({
    rfc,
    name,
    direccion,
    phoneNumber,
    email,
    vehiculosacargo,
    saldo,
    status
  })

  newClient.save((err:any, client) : void => {

    err? res.status(500).json({err}) : res.status(200).json({client})

  })

}

export const updateClient = (req:Request, res:Response, next:NextFunction) : void => {

  const rfc = req.body.rfc
  Client.findOneAndUpdate({rfc}, req.body, (err:any, client) : void => {

    err? res.status(500).json({err}) : res.status(200).json({client})

  })

}

export const removeClient = (req:Request, res:Response, next:NextFunction) : void => {

  const rfc = req.body.rfc
  Client.findOneAndRemove({rfc}, (err:any, client) : void => {

    if (err) {
      res.status(200).json({err})
    }

  })

}
