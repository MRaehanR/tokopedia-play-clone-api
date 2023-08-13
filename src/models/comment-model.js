import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    videoId: {
      type: mongoose.ObjectId,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
