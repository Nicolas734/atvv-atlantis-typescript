import { Router } from "express"
import { buscarDependente, buscarDependentes, buscarTitularDependentes, cadastrarDependente } from "../controllers/dependenteController.js";

const router = Router();

router.get("/buscar", buscarDependentes);

router.get("/buscar/:id", buscarDependente);

router.get("/buscar/titular/:id", buscarTitularDependentes);

router.post("/cadastrar", cadastrarDependente);

export default router;