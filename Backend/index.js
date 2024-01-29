//importar express js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/database.js';
import router from './routes/usuariosRoute.js';

dotenv.config();


//asignar express a la variable app
const app = express();

//conexión a la base de datos
conectarDB();

//habilitar el uso de json
app.use(express.json());

//cors
const dominiosPermitidos = [process.env.FRONTEND_URL];

const opciones = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
            callback(null, true)
        } else {
            callback( new Error('No permitido por cors'))
        }

    }
}

app.use(cors(opciones));
//agregar los routes
app.use('/api/crud', router)

//asignar un puerto local
const port = process.env.PORT || 4000;

//correr el servidor
app.listen(port , () => {
    console.log(`Servidor local funcionando en el puerto ${port}`);
})