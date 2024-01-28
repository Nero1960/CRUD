import express from 'express';
//importar los controladores
import { 
    obtenerUsuarios,
    obtenerUsuario,
    registrar,
    actualizar,
    eliminar
 } from '../controllers/UsuarioControllers.js';

const router = express.Router();

router.get('/', obtenerUsuarios);
router.get('/perfil/:_id', obtenerUsuario);
router.post('/registrar', registrar);
router.put('/actualizar/:_id', actualizar);
router.delete('/eliminar/:_id', eliminar);

export default router;