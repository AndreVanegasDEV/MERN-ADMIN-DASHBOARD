import express from 'express';
import {
    obtenerVotantes,
    agregarVotante,
} from '../controllers/votantes.controller.js';

const router = express.Router();

router.get("/all", obtenerVotantes);
router.post("/add", agregarVotante);

export default router;