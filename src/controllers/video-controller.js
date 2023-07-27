import { loggerFile } from "../configs/logger.js";
import VideoService from "../services/video-service.js";

class VideoController {
  static async getAllVideos(req, res, next) {
    try {
      const videos = await VideoService.getAllVideos();
      const data = [];

      videos.forEach((video) => {
        data.push({
          id: video._id,
          title: video.title,
          imgUrl: video.url_thumbnail,
          videoUrl: video.url_video
        });
      });

      res.success({ message: "Success Get All Videos", data: data });
    } catch (error) {
      loggerFile.error(error);
      next(error);
    }
  }

  static async addVideo(req, res, next) {
    try {
      const title = req.body.title;
      const urlThumbnail = req.body.url_thumbnail;
      const urlVideo = req.body.url_video;

      const video = await VideoService.addVideo({ title, urlThumbnail, urlVideo });

      res.success({
        code: 201,
        message: "Success Add Video",
        data: {
          id: video._id,
          title: video.title,
          imgUrl: video.url_thumbnail,
          videoUrl: video.url_video
        }
      });
    } catch (error) {
      loggerFile.error(error);
      next(error);
    }
  }
}

export default VideoController;
