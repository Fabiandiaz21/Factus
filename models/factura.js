import mongoose from "mongoose";

const FacturaSchema = new mongoose.Schema({
  numbering_range_id: { type: Number, required: true },
  reference_code: { type: String, required: true },
  observation: { type: String },
  payment_form: { type: String, required: true },
  payment_due_date: { type: String, required: true },
  payment_method_code: { type: String, required: true },
  billing_period: {
      start_date: { type: String, required: true },
      start_time: { type: String, required: true },
      end_date: { type: String, required: true },
      end_time: { type: String, required: true }
  },
  clientes:{type:mongoose.Schema.Types.ObjectId,ref:'clientes',required:true, },
  items:{type:mongoose.Schema.Types.ObjectId,ref:'items',required:true, },
});

export default mongoose.model("Factura", FacturaSchema);
