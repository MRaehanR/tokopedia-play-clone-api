import Video from "../models/video-model.js";

class VideoService {
  static async getAllVideos() {
    const videos = await Video.find({}).exec();

    return videos;
  }

  static async addVideo({ title, urlThumbnail, urlVideo }) {
    const video = new Video({ title: title, url_thumbnail: urlThumbnail, url_video: urlVideo });
    const videoSave = await video.save();

    return videoSave;
  }
}

export default VideoService;
