import Product from "../models/product-model.js";

class ProductService {
  static async addProduct({ videoId, title, price, imgUrl }) {
    const product = new Product({
      video_id: videoId,
      title: title,
      price: price,
      url_img: imgUrl
    });

    const productSave = await product.save();

    return productSave;
  }

  static async getAllProducts(videoId) {
    const products = await Product.find({ video_id: videoId }).exec();

    return products;
  }
}

export default ProductService;
