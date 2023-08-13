import express from "express";
import VideoController from "../../controllers/video-controller.js";

const videoRoutes = express.Router();

videoRoutes.get("/", VideoController.getAllVideos);
videoRoutes.post("/", VideoController.addVideo);

export default videoRoutes;
