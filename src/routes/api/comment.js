import express from "express";
import CommentController from "../../controllers/comment-controller.js";

const commentRoutes = express.Router();

commentRoutes.get("/:videoId", CommentController.getAllCommentsByVideoId);
commentRoutes.post("/:videoId", CommentController.addComment);

export default commentRoutes;
