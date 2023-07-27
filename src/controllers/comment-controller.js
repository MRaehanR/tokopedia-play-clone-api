import CommentService from "../services/comment-service.js";

class CommentController {
  static async addComment(req, res, next) {
    try {
      const videoId = req.params.videoId;
      const username = req.body.username;
      const text = req.body.text;

      const comment = await CommentService.addComment({ videoId, username, text });

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
      const videoId = req.params.videoId;

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
