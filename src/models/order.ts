import mongoose from "mongoose";

export const orderSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    orderedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "OrderInfo" }],
    total: { type: Number, required: [true, "Total Amount of Order"] },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;