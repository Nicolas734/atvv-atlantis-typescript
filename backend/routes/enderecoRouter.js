import { Router } from "express";
import { buscarEnderecos, buscarEndereco, cadastrarEndereco } from "../controllers/enderecoController.js"

const router = Router();

router.get("/buscar", buscarEnderecos);

router.get("/buscar/:id", buscarEndereco);

router.post("/cadastrar", cadastrarEndereco);

export default router;