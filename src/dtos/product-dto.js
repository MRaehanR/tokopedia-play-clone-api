class ProductDTO {
  constructor(product) {
    this.id = product._id;
    this.videoId = product.videoId;
    this.title = product.title;
    this.imgUrl = product.imgUrl;
    this.price = product.price;
    this.priceFormat = `Rp. ${product.price}`;
    this.productUrl = product.productUrl;
    this.createdAt = product.createdAt;
    this.updatedAt = product.updatedAt;
  }
}

export default ProductDTO;
