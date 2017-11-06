
/*

Cliente:

* rfc
nombre
direccion
telefono
email
vehiculosacargo
saldo
status

*/

// regex para idioma latino
// var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// regex oficial
// var regOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


import { Schema, model } from 'mongoose'

const validEmail = (email:string):boolean => {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)
}

const clientSchema = new Schema({
  rfc: {
    type: String,
    minlength: [12, 'RFC too short to save'],
    maxlength: [13, 'RFC too long to save'],
    required: [true, "RFC it's necesary"],
    unique: [true, 'RFC shoud be unique']
  },
  name: {
    type: String,
    required: [true, 'name is required']
  },
  direction: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  email: {
    type: String,
    validate: validEmail
  },
  vehiculosacargo: {
    type: Number,
    default: 0
  },
  saldo: {
    type: Number
  },
  status: {
    type: String,
    default: 'activo'
  }
})

export default model('Client', clientSchema)
