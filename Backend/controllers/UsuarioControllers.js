import Usuarios from "../models/Usuarios.js"

const registrar = async (request, response) => {
    const {email} = request.body;

    const usuarioExiste = await Usuarios.findOne({email});

    if(usuarioExiste){
        const error = new Error('El usuario ya existe');
        response.status(403).json({msg: error.message});
        return;
    }

   try {
        const usuarioGuardado = new Usuarios(request.body);
        const usuarioNuevo = await usuarioGuardado.save();
        response.json(usuarioNuevo);
    
   } catch (error) {
    console.log(error);
   }
}

const actualizar = async (request, response) => {
    const { _id } = request.params;
    console.log(_id);

    try {
        const usuario = await Usuarios.findById(_id);

        //actualizar el paciente
        usuario.nombre = request.body.nombre || usuario.nombre;
        usuario.apellido = request.body.apellido || usuario.apellido;
        usuario.telefono = request.body.telefono || usuario.telefono;
        usuario.email = request.body.email || usuario.email;
        usuario.empresa = request.body.empresa || usuario.empresa;

        const usuarioActualizado = await usuario.save();
        response.json(usuarioActualizado);
        
    } catch (error) {
        response.status(403).json({msg: 'El usuario no existe'});
    }
    
}

const obtenerUsuarios = async (request, response) => {
    try {
        const usuarios = await Usuarios.find();
        response.json(usuarios);
    } catch (err) {
        const error = new Error('Ha ocurrido un error');
        return response.json({msg: error.message});
        
    }
}

const obtenerUsuario = async (request, response) => {
    const {_id} = request.params;

    try {

       const usuario = await Usuarios.findById(_id);
       response.json(usuario);

    } catch (error) {
        const err = new Error('El usuario no existe');
        return response.json({msg: err.message});
    }
    
}

const eliminar = async (request, response) => {
    const { _id } = request.params; 

    try {
        const usuario = await Usuarios.findById(_id);

        if(usuario){
            await usuario.deleteOne();
            response.json('Usuario eliminado correctamente');
        }
    } catch (err) {

        const error = new Error('El usuario no existe');
        return response.status(404).json({msg: error.message})
        
    }
}

export {
    obtenerUsuario,
    obtenerUsuarios,
    registrar,
    actualizar, 
    eliminar
}