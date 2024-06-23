import mongoose from "mongoose";

const productReviewSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: { type: Number, min: 0, max: 5, required: true },
  review: { type: String, required: true },
});

const ProductReview = mongoose.model("ProductReview", productReviewSchema);

export { ProductReview }