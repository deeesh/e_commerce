import mongoose from "mongoose";

export const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "name"] },
    email: { type: String },
    mobile: { type: String },
    cart: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderInfo"
    }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;