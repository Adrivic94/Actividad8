const { Schema, model } = require('mongoose');

// Creamos el Schema para los inmuebles
const inmuebleSchema = new Schema(
  {
    piso: Number,
    letra: String,
    extensión: Number,
    número_de_habitaciones: Number,
    alquilado: Boolean,
    nombre_propietario: String,
    mail_de_contacto: String,
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        // ret.id = ret._id;
        delete ret.id;
      }
    }
  }
);

module.exports = model('inmueble', inmuebleSchema); // Relacionamos la colección con el esquema en MongoDB