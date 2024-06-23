import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  total_amount: { type: Number, required: true },
});

const cartItemSchema = new Schema({
  cart_id: { type: Schema.Types.ObjectId, ref: "Cart", required: true },
  product_id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
});

const Cart = mongoose.model("Cart", cartSchema);
const CartItem = mongoose.model("CartItem", cartItemSchema);

export { Cart, CartItem }