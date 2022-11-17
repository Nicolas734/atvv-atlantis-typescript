import { Router } from "express";
import { buscarDocumento, buscarDocumentos, cadastrarDocumento } from "../controllers/documentoController.js";


const router = Router();

router.get("/buscar", buscarDocumentos);

router.get("/buscar/:id", buscarDocumento);

router.post("/cadastrar", cadastrarDocumento);

export default router;