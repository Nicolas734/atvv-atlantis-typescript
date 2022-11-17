import { Router } from "express"
import { buscarAcomodacao, buscarAcomodacoes, cadastrarAcomodacao } from "../controllers/acomodacaoController.js"

const router = Router();

router.get("/buscar", buscarAcomodacoes);

router.get("/buscar/:id", buscarAcomodacao);

router.post("/cadastrar", cadastrarAcomodacao);

export default router;