import express from 'express';
import {
    obtenerReuniones,
    agregarReunion,
} from '../controllers/reuniones.controller.js';

const router = express.Router();

router.get("/all", obtenerReuniones);
router.post("/add", agregarReunion);

export default router;