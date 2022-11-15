import { Router } from "express";
import { buscarClientes } from "../controllers/clienteController.js";

const router = Router();

router.get("/buscar", buscarClientes);

export default router;