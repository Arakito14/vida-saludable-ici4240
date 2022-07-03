const { Schema, model } = require('mongoose')

const employeeSchema = new Schema({
    name: { type: String, required: true },
    rut: { type: String, required: true },
    rol: { type: String, required: true },
    contacto: {type: String, required: true}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Employee', employeeSchema);