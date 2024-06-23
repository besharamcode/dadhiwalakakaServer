import mongoose from "mongoose";

const paymentSchema = new Schema({
  order_id: { type: Schema.Types.ObjectId, ref: "Order", required: true },
  amount: { type: Number, required: true },
  payment_method: { type: String, required: true },
  status: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", paymentSchema);

export { Payment };
