/*  detallerenta: */

import { Schema, model } from 'mongoose'

const rentDetailSchema = new Schema({
  folio: {
    type: String,
    unique: [true, 'folio is required']
  },
  idInsumo: {
    type: String,
    required: [true, '']
  },
  precio: {
    type: Number,
    default: 0
  },
  cantidad: {
    type: Number,
    default: 0
  }
})

export default model('RentDetail', rentDetailSchema)
