import Joi from 'joi';

export const createCategoriesSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    departmentId: Joi.string().required()
});