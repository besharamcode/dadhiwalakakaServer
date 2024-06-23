import mongoose, { Schema } from "mongoose";

const deliverySchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    product_id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    address_id: {
      type: Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

const Delivery = mongoose.model("Delivery", deliverySchema);

export { Delivery }