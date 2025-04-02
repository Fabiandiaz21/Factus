import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  code_reference: {  type: String},
  name: { type: String},
  quantity: { type: Number, },
  discount_rate: { type: Number,  },
  price: { type: Number,  },
  tax_rate: { type: String,  },
  unit_measure_id: { type: String, },
  standard_code_id: { type: String},
  is_excluded: { type: Number, },
  tribute_id: { type: String},
  withholding_taxes: [{
      code: { type: String },
      withholding_tax_rate: { type: String }
  }]
});


export default mongoose.model("Item", ItemSchema);
