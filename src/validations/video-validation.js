import Joi from "joi";

export const addVideoValidation = Joi.object({
  title: Joi.string().max(50).required(),
  imgUrl: Joi.string().required(),
  videoUrl: Joi.string().required(),
  totalView: Joi.number().required(),
  storeName: Joi.string().required(),
  discountCoupon: Joi.boolean().default(false),
  onlyAtLive: Joi.boolean().default(false),
  categories: Joi.array().required()
});
