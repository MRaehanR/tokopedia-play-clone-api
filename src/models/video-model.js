import mongoose from "mongoose";

const videoSchema = mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
      index: true,
      minLenght: 5
    },
    imgUrl: {
      type: String,
      required: true
    },
    videoUrl: {
      type: String,
      required: true
    },
    totalView: {
      type: Number,
      required: true
    },
    storeName: {
      type: String,
      required: true
    },
    discountCoupon: {
      type: Boolean,
      default: false
    },
    onlyAtLive: {
      type: Boolean,
      default: false
    },
    categories: {
      type: Array,
      required: true
    }
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

export default Video;
