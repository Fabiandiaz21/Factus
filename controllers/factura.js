import mongoose from "mongoose";
import axios from "axios";
import Factura from "../models/factura.js";
import factura from "../models/factura.js";

const facturaController = {
  postFactura: async (req, res) => {
    try {
      const token = req.body.Token._rawValue;
      console.log("Datos recibidos en el backend:", req.body); 
  
      const facturaValidada = await axios.post(
        "https://api-sandbox.factus.com.co/v1/bills/validate",
        req.body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
  
      const { bill, customer } = facturaValidada.data.data; // ✅ Extraer `customer`
      console.log("bill", bill);
      console.log("customer", customer); // ✅ Verificar si llega el cliente
  
      const invoice = new factura(req.body);
      invoice.dataFactus = bill;
      invoice.customer = customer; // ✅ Guardar el cliente en la factura
  
      await invoice.save();
      res.status(201).json(invoice);
    } catch (error) {
      console.error("Error al crear la factura:", error);
      res.status(500).json({ error: error.message });
    }
  },
  
  
  // Obtener todas las facturas
  getFacturas: async (req, res) => {
    try {
      const facturas = await Factura.find()
        .populate('customer') // Asegura que traiga los datos del cliente
        .populate('items') // Si también necesitas los items
        .lean(); // Convierte a JSON puro para evitar problemas
  
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

    // Buscar la factura con el cliente relacionado
    const factura = await Factura.findById(id).populate("customer"); // ✅ Agregamos populate

    if (!factura) {
      return res.status(404).json({ message: "Factura no encontrada" });
    }

    res.json(factura);
  } catch (error) {
    console.error("Error al obtener la factura:", error);
    res.status(500).json({ error: error.message });
  }
},


};

export default facturaController;
