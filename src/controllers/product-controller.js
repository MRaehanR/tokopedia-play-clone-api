import ProductService from "../services/product-service.js";
import validate from "../validations/index.js";
import { addProductValidation, getAllProductByIdValidation } from "../validations/product-validation.js";

class ProductController {
  static async addProduct(req, res, next) {
    try {
      const productData = validate(addProductValidation, req);

      const product = await ProductService.addProduct(productData);

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
      next(error);
    }
  }

  static async getAllProductsByVideoId(req, res, next) {
    try {
      const { videoId } = validate(getAllProductByIdValidation, req);

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
      next(error);
    }
  }
}

export default ProductController;
