import Joi from 'joi';

export const createDepartmentSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required()
});