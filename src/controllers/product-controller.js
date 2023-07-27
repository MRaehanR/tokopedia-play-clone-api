import { loggerFile } from "../configs/logger.js";
import ProductService from "../services/product-service.js";

class ProductController {
  static async addProduct(req, res, next) {
    try {
      const videoId = req.params.videoId;
      const title = req.body.title;
      const price = req.body.price;
      const imgUrl = req.body.imgUrl;

      const product = await ProductService.addProduct({ videoId, title, price, imgUrl });

      res.success({
        code: 201,
        message: "Success Added Product",
        data: {
          id: product._id,
          title: product.title,
          imgUrl: product.imgUrl,
          price: product.price,
          price_format: `Rp. ${product.price}`
        }
      });
    } catch (error) {
      loggerFile.error(error);
      next(error);
    }
  }

  static async getAllProductsByVideoId(req, res, next) {
    try {
      const videoId = req.params.videoId;

      const products = await ProductService.getAllProducts(videoId);
      const data = [];

      products.forEach((product) => {
        data.push({
          id: product._id,
          videoId: product.videoId,
          title: product.title,
          imgUrl: product.imgUrl,
          price: product.price,
          priceFormat: `Rp. ${product.price}`
        });
      });

      res.success({
        message: "Success Get All Products",
        data: data
      });
    } catch (error) {
      loggerFile.error(error);
      next(error);
    }
  }
}

export default ProductController;
