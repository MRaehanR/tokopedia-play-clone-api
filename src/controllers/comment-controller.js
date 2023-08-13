import CommentDTO from "../dtos/comment-dto.js";
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
        data: new CommentDTO(comment)
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllCommentsByVideoId(req, res, next) {
    try {
      const { videoId } = validate(getAllCommentByVideoIdValidation, req);

      const comments = await CommentService.getAllComments(videoId);

      const data = comments.map((comment) => new CommentDTO(comment));

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
