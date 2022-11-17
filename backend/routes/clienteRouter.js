import { Router } from "express";
import { atualizarCliente, buscarCliente, buscarClientes, cadastrarCliente, excluirCliente } from "../controllers/clienteController.js";

const router = Router();

router.get("/buscar", buscarClientes);

router.get("/buscar/:id", buscarCliente);

router.post("/cadastrar", cadastrarCliente);

router.put("/atualizar/:id", atualizarCliente);

router.delete("/excluir/:id", excluirCliente);

export default router;