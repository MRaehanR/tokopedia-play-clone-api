class CommentDTO {
  constructor(product) {
    this.id = product._id;
    this.videoId = product.videoId;
    this.username = product.username;
    this.text = product.text;
    this.createdAt = product.createdAt;
    this.updatedAt = product.updatedAt;
  }
}

export default CommentDTO;
