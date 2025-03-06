import { Router } from 'express';
import facturaController from "../controllers/factura.js"

const router = Router();

router.post("/", facturaController.postFactura);
router.get("/", facturaController.getFacturas);
router.get("/:id", facturaController.getFacturaById);

export default router;