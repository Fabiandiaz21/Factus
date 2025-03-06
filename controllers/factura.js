import mongoose from "mongoose";
import Factura from "../models/factura.js";

const facturaController = {
  // Crear una nueva factura
  postFactura: async (req, res) => {
    try {
      const factura = new Factura(req.body);
      await factura.save();
      res.status(201).json(factura);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtener todas las facturas
  getFacturas: async (req, res) => {
    try {
      const facturas = await Factura.find();
      res.json(facturas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtener una factura por ID
  getFacturaById: async (req, res) => {
    try {
      const { id } = req.params;

      // Validar si el ID es correcto
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "ID de factura inválido" });
      }

      const factura = await Factura.findById(id);

      if (!factura) {
        return res.status(404).json({ message: "Factura no encontrada" });
      }

      res.json(factura);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default facturaController;

