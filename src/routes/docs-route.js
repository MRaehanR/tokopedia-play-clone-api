import express from "express";
import swaggerRoute from "../configs/swagger.js";

const docsRoutes = express.Router();

docsRoutes.use(swaggerRoute);

export default docsRoutes;
