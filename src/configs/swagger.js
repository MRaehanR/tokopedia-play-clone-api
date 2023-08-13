import express from "express";
import swaggerUi from "swagger-ui-express";
import fs from "fs";

const swaggerRoute = express.Router();
const swaggerDoc = JSON.parse(fs.readFileSync("docs/swagger.json"));

swaggerRoute.use("/api", swaggerUi.serve);
swaggerRoute.get("/api", swaggerUi.setup(swaggerDoc));

export default swaggerRoute;
