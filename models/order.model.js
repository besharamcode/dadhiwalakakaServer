import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  total_amount: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
});

const orderItemSchema = new Schema({
  order_id: { type: Schema.Types.ObjectId, ref: "Order", required: true },
  product_id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Order = mongoose.model("Order", orderSchema);
const OrderItem = mongoose.model("OrderItem", orderItemSchema);

export { Order, OrderItem };
