import Client from '../models/client'
import { Request, Response, NextFunction } from 'express'

export const getAllClients = (req:Request, res:Response, next:NextFunction) : void => {

  Client.find()
    .then(clients => res.status(200).json({clients}))
    .catch(err => res.status(500).json({err}))

}

export const getClientById = (req:Request, res:Response, next:NextFunction) : void => {

  const rfc = req.params.rfc

  Client.findOne({rfc})
    .then(client => res.status(200).json(client))
    .catch(err => res.status(500).json({err}))

}

export const postClient = (req:Request, res:Response, next:NextFunction) : void => {

  const rfc = req.body.rfc
  const name = req.body.name
  const addres = req.body.addres
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
    addres,
    phoneNumber,
    email,
    vehiculosacargo,
    saldo,
    status
  })

  newClient.save()
    .then(client => res.status(200).json({client}))
    .catch(err => res.status(500).json({err}))

}

export const updateClient = (req:Request, res:Response, next:NextFunction) : void => {

  const rfc = req.params.rfc
  Client.findOneAndUpdate({rfc}, req.body)
    .then(client => res.status(200).json({client}))
    .catch(err => res.status(500).json({err}))

}

export const deleteClient = (req:Request, res:Response, next:NextFunction) : void => {

  const rfc = req.params.rfc
  Client.findOneAndRemove({rfc})
    .then(client => res.status(200).json({client}))
    .catch(err => res.status(500).json({err}))

}
