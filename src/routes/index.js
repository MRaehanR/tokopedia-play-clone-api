import express from "express";
import docsRoute from "./docs-route.js";

const router = express.Router();

const devRoutes = [
  {
    path: "/docs",
    route: docsRoute
  }
];

if (process.env.ENV === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

export default router;
