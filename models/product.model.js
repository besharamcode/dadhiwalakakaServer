import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    seller_name: { type: String, required: true },
    images: { type: [String], required: true },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    size: { type: [String], required: true },
    color: { type: [String], required: true },
    average_rating: { type: Number, min: 0, max: 5 },
  },
  { timestamps: true }
);
