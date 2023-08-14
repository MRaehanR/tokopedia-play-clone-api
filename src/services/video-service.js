import Video from "../models/video-model.js";

class VideoService {
  static async getAllVideos(queryReq) {
    const query = {};

    if (queryReq.search) {
      query.title = { $regex: queryReq.search, $options: "i" };
    }

    if (queryReq.category) {
      query.categories = { $in: [queryReq.category] };
    }

    const videos = await Video.find(query).exec();

    return videos;
  }

  static async addVideo(videoData) {
    const video = new Video(videoData);
    const videoSave = await video.save();

    return videoSave;
  }
}

export default VideoService;
