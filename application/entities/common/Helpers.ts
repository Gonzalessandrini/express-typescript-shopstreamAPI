import Joi from 'joi';

import { InvalidParameterError } from '../errors/Errors';

export const validateOrThrow = (params: object, schema: Joi.Schema) => {
  try {
    schema.validate(params, { abortEarly: false });
  } catch (err: any) {
    throw new InvalidParameterError(err.details.map((error: { message: string }) => error.message).join('\n'));
  }
};
