/* Renta: */

import { Schema, model } from 'mongoose'

const rentSchema = new Schema({
  folio: {
    type: String,
    required: [true, 'folio is required'],
    unique: [true, 'folio must be unique']
  },
  rentDate: {
    type: String,
    default: Date.now()
  },
  devolucionDate: {
    type: String,
    default: Date.now()
  },
  rfcClient: {
    type: String,
    required: [true, 'RFC Client is required']
  },
  rfcEmployee: {
    type: String,
    required: [true, 'RFC Employee is required']
  },
  placas: {
    type: String,
    required: [true, 'Placas is required']
  },
  driverName: {
    types: String,
    required: [true, 'driver name is required']
  },
  status: {
    type: String,
    default: 'sin pagar'
  },
  rentDays: {
    type: Number,
    default: 1
  },
  kilominicial: {
    type: Number,
    default: 0
  },
  kilomfinal: {
    type: Number,
    default: 0
  }
})

export default model('Rent', rentSchema)
