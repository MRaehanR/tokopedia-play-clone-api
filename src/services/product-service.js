import Product from "../models/product-model.js";

class ProductService {
  static async addProduct(productData) {
    const product = new Product(productData);

    const productSave = await product.save();

    return productSave;
  }

  static async getAllProducts(videoId) {
    const products = await Product.find({ videoId: videoId }).exec();

    return products;
  }
}

export default ProductService;
