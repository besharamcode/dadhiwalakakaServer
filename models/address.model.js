import mongoose from "mongoosee";

const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    flat_no: { type: String, required: true },
    building_name: { type: String, required: true },
    road_street: { type: String, required: true },
    landmark: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

export { Address };