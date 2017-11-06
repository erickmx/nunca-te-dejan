/*  Chofer: */

import { Schema, model } from 'mongoose'

const driverSchema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  status: { type: String, required: true, default: "activo" }
})

export default model('Chofer', driverSchema)
