import VideoDTO from "../dtos/video-dto.js";
import VideoService from "../services/video-service.js";
import validate from "../validations/index.js";
import { addVideoValidation } from "../validations/video-validation.js";

class VideoController {
  static async getAllVideos(req, res, next) {
    try {
      const search = req.query.search;

      const videos = await VideoService.getAllVideos(search);

      const data = videos.map((video) => new VideoDTO(video));

      res.success({ message: "Success Get All Videos", data: data });
    } catch (error) {
      next(error);
    }
  }

  static async addVideo(req, res, next) {
    try {
      const videoData = validate(addVideoValidation, req);

      const video = await VideoService.addVideo(videoData);

      res.success({
        code: 201,
        message: "Success Added Video",
        data: new VideoDTO(video)
      });
    } catch (error) {
      next(error);
    }
  }
}

export default VideoController;
