import ProductDTO from "../dtos/product-dto.js";
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
        data: new ProductDTO(product)
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllProductsByVideoId(req, res, next) {
    try {
      const { videoId } = validate(getAllProductByIdValidation, req);

      const products = await ProductService.getAllProducts(videoId);

      const data = products.map((product) => new ProductDTO(product));

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
