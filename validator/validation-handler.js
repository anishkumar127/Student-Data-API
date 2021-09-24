import Joi from 'joi';

const studentSchemaValidate = Joi.object({
     firstName: Joi.string().min(5).max(10).required(),
     lastName: Joi.string().min(5).max(10).required(),
     place: Joi.string().min(5).max(10).required()
})

export default studentSchemaValidate;