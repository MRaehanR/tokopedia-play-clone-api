import mongoose from "mongoose";

const videoSchema = mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
      index: true,
      minLenght: 5
    },
    url_thumbnail: {
      type: String,
      required: true
    },
    url_video: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

export default Video;
