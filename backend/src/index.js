import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoute from "./routes/usuario.route.js";
import connectDB from './database.js';
import empleadoRoute from './routes/empleado.route.js';
//import empleadoCtrl from './controllers/empleado.controller.js';
connectDB();
//crear variable con la funcionalidad de express
const app=express();
//definir el perto por el que escucha el servidor
app.set('Port',4000);
//agregar morgan para poder ver las peticiones al servidor en consola
app.use(morgan('dev'));
//establecer las respuestas del servidor para que sean en formato tipo json
app.use(express.urlencoded({extender:true}));
app.use(express.json());
//para poder recibir peticiones de diferentes fuentes no solo de direcciones ip
app.use(cors({origen:'*'}));


app.use('/api',userRoute);
app.use('/api/employee',empleadoRoute);

//se pone a correr el servidor
app.listen(app.get('Port'),()=>{
    console.log('Servidor escuchado por el pueto: ',
    app.get('Port'));
})

app.use('/',(req,res)=>{
    res.status(200).json({
        ok:true,
        message:'Mi Primer programa en NodeJs!!!'
    });
});