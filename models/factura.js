  import mongoose from "mongoose";

  const FacturaSchema = new mongoose.Schema({
    numbering_range_id: { type: String, }, // Rango de numeración
    reference_code: { type: String, required: true, unique: true }, // Código de referencia
    observation: { type: String, default: "" }, // Observación opcional
    payment_form: { type: Number }, // Forma de pago
    payment_due_date: { type: Date }, // Fecha de vencimiento
    payment_method_code: { type: String }, // Código del método de pago
    billing_period: {
      start_date: { type: Date }, // Fecha de inicio del período
      start_time: { type: String }, // Hora de inicio
      end_date: { type: Date }, // Fecha de fin del período
      end_time: { type: String }, // Hora de fin
    },
    customer: { type: Object }, // Relación con cliente
    items: [{ type: Array }], // Array de productos
    dataFactus:{type:Object}
  }, { timestamps: true });

  export default mongoose.model("Factura", FacturaSchema);
    