import { Router } from "express";
import { buscarDocumento, buscarDocumentos } from "../controllers/documentoController.js";


const router = Router();

router.get("/buscar", buscarDocumentos);

router.get("/buscar/:id", buscarDocumento);

export default router;