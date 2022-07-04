const { Schema, model } = require('mongoose')

const employeeSchema = new Schema({
    name: { type: String },
    clave: { type: String},
    rut: { type: String },
    rol: { type: String },
    contacto: {type: String}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Employee', employeeSchema);