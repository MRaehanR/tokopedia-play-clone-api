import CommentService from "../services/comment-service.js";
import { addCommentValidation, getAllCommentByVideoIdValidation } from "../validations/comment-validation.js";
import validate from "../validations/index.js";

class CommentController {
  static async addComment(req, res, next) {
    try {
      const commentData = validate(addCommentValidation, req);

      const comment = await CommentService.addComment(commentData);

      res.success({
        code: 201,
        message: "Success Added Video",
        data: {
          id: comment._id,
          username: comment.username,
          text: comment.text,
          timestamps: comment.createdAt
        }
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllCommentsByVideoId(req, res, next) {
    try {
      const { videoId } = validate(getAllCommentByVideoIdValidation, req);

      const comments = await CommentService.getAllComments(videoId);

      const data = [];

      comments.forEach((comment) => {
        data.push({
          id: comment._id,
          username: comment.username,
          text: comment.text,
          timestamps: comment.createdAt
        });
      });

      res.success({
        message: "Success Get All Comments",
        data: data
      });
    } catch (error) {
      next(error);
    }
  }
}

export default CommentController;
