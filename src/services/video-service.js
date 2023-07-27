import Video from "../models/video-model.js";

class VideoService {
  static async getAllVideos() {
    const videos = await Video.find({}).exec();

    return videos;
  }

  static async addVideo({ title, imgUrl, videoUrl }) {
    const video = new Video({ title: title, imgUrl: imgUrl, videoUrl: videoUrl });
    const videoSave = await video.save();

    return videoSave;
  }
}

export default VideoService;
