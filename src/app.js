import express from "express";
import "dotenv/config";
import router from "./routes/index.js";
import { responses } from "./helpers/responses.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";

const app = express();

app.use(express.json());
app.use(responses);
app.use(router);
app.use(errorMiddleware);

export default app;
