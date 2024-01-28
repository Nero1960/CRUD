import mongoose from "mongoose";

//definir el schema en mongo db
const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    }, 

    apellido: {
        type: String,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    telefono: {
        type: String,
        trim: true,
        default: null
    },

    empresa: {
        type: String,
        trim: true,
        default: null
    }

});

const Usuarios = mongoose.model('usuarios', usuarioSchema);

export default Usuarios;