/*  Vehiculo: */

import { Schema, model } from 'mongoose'

const vehicleSchema = new Schema({
  placas: {
    type: String,
    required: [true, 'placas shoud not be empty']
  },
  linea: {
    type: String,
    required: [true, 'linea shoud not be empty']
  },
  marca: {
    type: String,
    required: [true, 'marca is required']
  },
  model: {
    type: String,
    required: [true, 'model is required']
  },
  kilometraje: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: 'activo'
  },
  priceMonth: {
    type: Number,
    required: [true, 'price per month is required'],
    default: 0
  },
  priceWeek: {
    type: Number,
    required: [true, 'price per week is required'],
    default: 0
  },
  priceDay: {
    type: Number,
    required: [true, 'price per day is required'],
    default: 0
  }
})

export default model('Vehicle', vehicleSchema)
