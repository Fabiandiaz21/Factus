import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema({
  identification: { type: String,},
  dv: { type: String },
  company: { type: String },
  trade_name: { type: String },
  names: { type: String, },
  address: { type: String,  },
  email: { type: String, },
  phone: { type: String, },
  legal_organization_id: { type: String,},
  tribute_id: { type: String, },
  identification_document_id: { type: String, },
  municipality_id: { type: String,  }
});

export default mongoose.model("customer", ClienteSchema);
