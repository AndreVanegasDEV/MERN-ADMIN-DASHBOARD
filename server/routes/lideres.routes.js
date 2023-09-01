import express from 'express';
import {
    obtenerLideres,
    agregarLider,
} from '../controllers/lideres.controller.js';

const router = express.Router();

router.get("/all", obtenerLideres);
router.post("/add", agregarLider);

export default router;