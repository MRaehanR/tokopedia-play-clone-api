import Video from "../models/video-model.js";

class VideoService {
  static async getAllVideos(search) {
    search = search ?? "";
    
    const videos = await Video.find({ title: { $regex: search, $options: "i" } }).exec();

    return videos;
  }

  static async addVideo({ title, imgUrl, videoUrl }) {
    const video = new Video({ title: title, imgUrl: imgUrl, videoUrl: videoUrl });
    const videoSave = await video.save();

    return videoSave;
  }
}

export default VideoService;
