import express from 'express';
//importar los controladores
import { registrar } from '../controllers/UsuarioControllers.js';

const router = express.Router();


router.get('/', registrar)

export default router;