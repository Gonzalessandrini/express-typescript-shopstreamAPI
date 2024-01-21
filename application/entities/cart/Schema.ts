import Joi from 'joi';

export const addProductToCartSchema = Joi.object({
  cart_id: Joi.string().required(),
  product_id: Joi.string().required(),
  quantity: Joi.number().integer().min(1).required(),
});

export const updateItemQuantitySchema = Joi.object({
  quantity: Joi.number().integer().min(1).required(),
  item_id: Joi.string().required()
});