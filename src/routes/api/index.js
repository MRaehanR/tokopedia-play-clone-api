import express from "express";
import videoRoutes from "./video.js";
import productRoutes from "./product.js";
import commentRoutes from "./comment.js";

const apiRoutes = express.Router();

apiRoutes.use("/videos", videoRoutes);
apiRoutes.use("/products", productRoutes);
apiRoutes.use("/comments", commentRoutes);

export default apiRoutes;
