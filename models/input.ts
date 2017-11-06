
/*  Insumo: */

import { Schema, model } from 'mongoose'

const inputSchema = new Schema({
  idInput: {
    type: String,
    auto: true
  },
  description: {
    type: String,
    required: [true, 'description is required']
  },
  typeProduct: {
    type: String,
    required: [true, 'Type is required']
  },
  price: {
    type: Number,
    default: 0
  },
  stock: {
    type: Number,
    default: 0
  },
  stockMin: {
    type: Number,
    default: 0
  },
  stockMax: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: 'agotado'
  }
})
