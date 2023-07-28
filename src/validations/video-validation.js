import Joi from "joi";

export const addVideoValidation = Joi.object({
  title: Joi.string().max(50).required(),
  imgUrl: Joi.string().required(),
  videoUrl: Joi.string().required()
});
