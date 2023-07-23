import express from "express";
import swaggerRoute from "../configs/swagger.js";

const docsRoute = express.Router();

docsRoute.use(swaggerRoute);

export default docsRoute;
