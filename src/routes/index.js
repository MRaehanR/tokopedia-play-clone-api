import express from "express";
import docsRoutes from "./docs-route.js";
import apiRoutes from "./api/index.js";

const router = express.Router();

router.use("/api", apiRoutes);

if (process.env.ENV === "development") {
  router.use("/docs", docsRoutes);
}

export default router;
