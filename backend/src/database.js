import mongoose from "mongoose";

const URI = "mongodb://127.0.0.1/prueba";

//se crea la conexion
const connectDB= async()=>{
    try{
        const db = await mongoose.connect(URI);
        console.log(`Base de datos conectada: ${db.connection.name}`);
    } catch(error){
        console.log('Error:', error.message);    
    }
}
export default connectDB;