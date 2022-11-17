import { Router } from "express"
import { buscarAcomodacao, buscarAcomodacoes } from "../controllers/acomodacaoController.js"

const router = Router();

router.get("/buscar", buscarAcomodacoes);

router.get("/buscar/:id", buscarAcomodacao);

export default router;