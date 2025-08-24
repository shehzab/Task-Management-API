import Joi from 'joi';

// User validation schemas
const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });

  return schema.validate(data);
};

// Task validation schemas - for creating
const taskCreateValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().max(100).required(),
    description: Joi.string().max(500).allow(''),
    status: Joi.string().valid('pending', 'in-progress', 'completed'),
    priority: Joi.string().valid('low', 'medium', 'high'),
    dueDate: Joi.date().iso().greater('now'),
    category: Joi.string().max(50).allow(''),
    tags: Joi.array().items(Joi.string())
  });

  return schema.validate(data);
};

// Task validation schemas - for updating (title not required)
const taskUpdateValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().max(100),
    description: Joi.string().max(500).allow(''),
    status: Joi.string().valid('pending', 'in-progress', 'completed'),
    priority: Joi.string().valid('low', 'medium', 'high'),
    dueDate: Joi.date().iso().greater('now'),
    category: Joi.string().max(50).allow(''),
    tags: Joi.array().items(Joi.string())
  });

  return schema.validate(data);
};

export {
  registerValidation,
  loginValidation,
  taskCreateValidation,
  taskUpdateValidation
};