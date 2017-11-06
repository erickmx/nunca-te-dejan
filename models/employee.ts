
/*  Empleado: */

import { Schema, model } from 'mongoose'
import { validEmail } from './client'

const employeeSchema = new Schema({
  rfc: {
    type: String,
    minlength: [12, 'RFC too short to save'],
    maxlength: [13, 'RFC too long to save'],
    required: [true, 'RFC is required'],
    unique: [true, 'RFC must be unique']
  },
  name: {
    type: String,
    required: [true, 'name is required']
  },
  addres: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  email: {
    type: String,
    validate: validEmail
  },
  area: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'activo'
  }
})

export default model('Employee', employeeSchema)
