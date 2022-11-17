import { Router } from "express";
import { buscarTelefones, buscarTelefone, cadastrarTelefone } from "../controllers/telefoneController.js"

const router = Router();

router.get("/buscar", buscarTelefones);

router.get("/buscar/:id", buscarTelefone);

router.post("/cadastrar", cadastrarTelefone)

export default router;