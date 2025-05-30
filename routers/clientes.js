import { Router } from "express";
import { check } from "express-validator";
import clientesController from "../controllers/clientes.js";

const router = Router()

router.post ("/", clientesController.createCliente);
router.get ("/", clientesController.getClientes);
router.get ("/:id", clientesController.getClienteById);
router.put("/:id",clientesController.updateCliente);
router.delete("/:id",clientesController.deleteCliente);

export default router;