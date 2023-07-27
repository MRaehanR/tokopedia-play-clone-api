import ProductService from "../services/product-service.js";

class ProductController {
  static async addProduct(req, res, next) {
    try {
      const videoId = req.params.videoId;
      const title = req.body.title;
      const price = req.body.price;
      const imgUrl = req.body.url_img;

      const product = await ProductService.addProduct({ videoId, title, price, imgUrl });

      res.success({
        code: 201,
        message: "Success Add Video",
        data: {
          id: product._id,
          title: product.title,
          imgUrl: product.url_img,
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
      const videoId = req.params.videoId;

      const products = await ProductService.getAllProducts(videoId);
      const data = [];

      products.forEach((product) => {
        data.push({
          id: product._id,
          videoId: product.video_id,
          title: product.title,
          imgUrl: product.url_thumbnail,
          price: product.price,
          price_format: `Rp. ${product.price}`
        });
      });

      res.success({
        message: "Success Get All Products By VideoID",
        data: data
      });
    } catch (error) {
      next(error);
    }
  }
}

export default ProductController;
