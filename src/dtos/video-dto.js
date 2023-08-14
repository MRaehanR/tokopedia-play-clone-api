class VideoDTO {
  constructor(video) {
    this.id = video._id;
    this.title = video.title;
    this.imgUrl = video.imgUrl;
    this.videoUrl = video.videoUrl;
    this.totalView = video.totalView;
    this.storeName = video.storeName;
    this.discountCoupon = video.discountCoupon;
    this.onlyAtLive = video.onlyAtLive;
    this.categories = video.categories;
    this.createdAt = video.createdAt;
    this.updatedAt = video.updatedAt;
  }
}

export default VideoDTO;
