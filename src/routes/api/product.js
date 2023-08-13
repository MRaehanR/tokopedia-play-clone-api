import express from "express";
import ProductController from "../../controllers/product-controller.js";

const productRoutes = express.Router();

productRoutes.post("/:videoId", ProductController.addProduct);
productRoutes.get("/:videoId", ProductController.getAllProductsByVideoId);

export default productRoutes;
