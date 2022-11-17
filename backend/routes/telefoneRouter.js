import { Router } from "express";
import { buscarTelefones, buscarTelefone } from "../controllers/telefoneController.js"

const router = Router();

router.get("/buscar", buscarTelefones);

router.get("/buscar/:id", buscarTelefone);

export default router;