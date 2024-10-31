import express from 'express';
import UsuarioController from '../controllers/usuario.controller.js';

const router = express.Router();

const crtl = new UsuarioController();

router.post("/criar", crtl.criar);

export default router;