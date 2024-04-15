import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    nombreU: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    nivel: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    domicilio: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

export const UserModel = model('usuario', userSchema);