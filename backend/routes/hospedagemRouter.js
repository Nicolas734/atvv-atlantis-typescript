import { Router } from "express";
import { buscarHospedagem, buscarHospedagens, cadastrarHospedagem } from "../controllers/hospedagemController.js";

const router = Router();

router.get("/buscar", buscarHospedagens);

router.get("/buscar/:id", buscarHospedagem);

router.post("/cadastrar", cadastrarHospedagem);

export default router;