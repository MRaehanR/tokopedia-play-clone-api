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
          imgUrl: video.imgUrl,
          videoUrl: video.videoUrl
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
      const imgUrl = req.body.imgUrl;
      const videoUrl = req.body.videoUrl;

      const video = await VideoService.addVideo({ title, imgUrl, videoUrl });

      res.success({
        code: 201,
        message: "Success Added Video",
        data: {
          id: video._id,
          title: video.title,
          imgUrl: video.imgUrl,
          videoUrl: video.videoUrl
        }
      });
    } catch (error) {
      loggerFile.error(error);
      next(error);
    }
  }
}

export default VideoController;
