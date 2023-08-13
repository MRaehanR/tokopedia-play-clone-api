import Joi from "joi";

export const addProductValidation = Joi.object({
  videoId: Joi.string().required(),
  title: Joi.string().max(50).required(),
  imgUrl: Joi.string().required(),
  price: Joi.number().required(),
  productUrl: Joi.string().required()
});

export const getAllProductByIdValidation = Joi.object({
  videoId: Joi.string().required()
});
