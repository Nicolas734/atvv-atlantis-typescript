import { Router } from "express";
import { buscarHospedagem, buscarHospedagens } from "../controllers/hospedagemController.js";

const router = Router();

router.get("/buscar", buscarHospedagens);

router.get("/buscar/:id", buscarHospedagem);

export default router;