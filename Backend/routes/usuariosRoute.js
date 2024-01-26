import express from 'express';
//importar los controladores
import { 
    registrar,
    actualizar
 } from '../controllers/UsuarioControllers.js';

const router = express.Router();


router.post('/registrar', registrar);
router.put('/actualizar/:_id', actualizar);

export default router;