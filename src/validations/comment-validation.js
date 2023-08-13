import Joi from "joi";

export const addCommentValidation = Joi.object({
  videoId: Joi.string().required(),
  username: Joi.string().max(50).required(),
  text: Joi.string().max(100).required()
});

export const getAllCommentByVideoIdValidation = Joi.object({
  videoId: Joi.string().required()
});
