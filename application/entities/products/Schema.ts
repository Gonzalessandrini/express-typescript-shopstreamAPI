import Joi from 'joi';

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  discounted_price: Joi.string().required(),
  thumbnail: Joi.string().required(),
  categoryId: Joi.number().required()
});
