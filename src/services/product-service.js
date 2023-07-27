import Product from "../models/product-model.js";

class ProductService {
  static async addProduct({ videoId, title, price, imgUrl }) {
    const product = new Product({
      videoId: videoId,
      title: title,
      price: price,
      imgUrl: imgUrl
    });

    const productSave = await product.save();

    return productSave;
  }

  static async getAllProducts(videoId) {
    const products = await Product.find({ videoId: videoId }).exec();

    return products;
  }
}

export default ProductService;
