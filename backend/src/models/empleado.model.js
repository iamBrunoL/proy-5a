import mongoose from "mongoose";
const {Schema, model} = mongoose;
const employeeSchema = new Schema({
    nombres:{
        type:String,
        required:true
    },
    fecha:{
        type:String,
        required:true
    },
    alergias:{
        type:String,
        required:true
    },
    servicio1:{
        type:String,
        required:true
    },

    servicio2:{
        type:String,
        required:true
    },
    servicio3:{
        type:String,
        required:true
    },
    servicio4:{
        type:String,
        required:true
    },
    raza:{
        type:String,
        required:true
    },

    telefono:{
        type:String,
        required:true
    },
    edad:{
        type:String,
        required:true
    },
    genero:{
        type:String,
        required:true
    },
    pago_realizado:{
        type:String,
        required:true
    },
    usuario:{
        type:Schema.ObjectId,
        ref:"usuario"
    }

},{
        timestamps:true
})
export const EmpleadoModel = model('empleado',employeeSchema);