import Joi from 'joi';

export const configSchema = Joi.object({
  http: {
    port: Joi.string(),
    mocked: Joi.boolean()
  },
  baseLogger: Joi.any(),
  mongoose: {
    uri: Joi.string().required()
  },
  jwt: {
    secret: Joi.string().required()
  }
});
