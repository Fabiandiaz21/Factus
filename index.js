import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import factura from './routers/factura.js';
import clientes from './routers/clientes.js';
import items from './routers/items.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("Public"))
app.use("/api/factura", factura);
app.use("/api/clientes", clientes);
app.use("/api/items", items);

// 🔹 Solución a la advertencia de `strictQuery`
mongoose.set('strictQuery', false);

mongoose.connect(process.env.CNX_MONGO)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => console.log('Error de conexión a MongoDB:', error));
