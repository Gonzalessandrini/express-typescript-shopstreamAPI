import Joi from 'joi';

export const createCustomerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const loginCustomerSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const updateCustomerDetailsSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  day_phone: Joi.string().required(),
  eve_phone: Joi.string().required(),
  mob_phone: Joi.string().required()
});

export const updateCustomerAddressSchema = Joi.object({
  address_1: Joi.string().required(),
  address_2: Joi.string().allow('').optional(),
  city: Joi.string().required(),
  region: Joi.string().required(),
  postal_code: Joi.string().required(),
});