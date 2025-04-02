import { Router } from "express";
import { check } from "express-validator";
import itemsController from "../controllers/items.js";

const router = Router()

router.post("/", itemsController.createItem);
router.get("/", itemsController.getItems);
router.get("/:id", itemsController.getItemById);
router.put("/:id", itemsController.updateItem);
router.delete("/:id",itemsController.deleteItem);


export default router;

