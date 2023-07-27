import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    videoId: {
      type: mongoose.ObjectId,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      default: 0
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
