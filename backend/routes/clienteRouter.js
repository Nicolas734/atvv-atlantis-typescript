import { Router } from "express";
import { buscarCliente, buscarClientes, cadastrarCliente } from "../controllers/clienteController.js";

const router = Router();

router.get("/buscar", buscarClientes);

router.get("/buscar/:id", buscarCliente);

router.post("/cadastrar", cadastrarCliente);

export default router;