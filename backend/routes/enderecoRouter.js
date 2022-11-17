import { Router } from "express";
import { buscarEnderecos, buscarEndereco } from "../controllers/enderecoController.js"

const router = Router();

router.get("/buscar", buscarEnderecos);

router.get("/buscar/:id", buscarEndereco);

export default router;