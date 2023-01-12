import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "product name"] },
    price: {
        type: Number,
        required: true
    },
    description: {type: String},
    inOrderInfoes: [{ type: mongoose.Schema.Types.ObjectId, ref: "OrderInfo" }],
    tags: {type: String},
    category: {type: String}
  },

  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;