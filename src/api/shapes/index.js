"use strict";

import Joi from 'Joi';
import { roles } from '../../service/models/user';

const create = {
	body: {
			username: Joi.string().email().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(128).required(),
			firstName: Joi.string().max(128),
			lastName: Joi.string().max(128),
      role: Joi.string().valid(roles),
    }
};

const update = {
	body: {
			username: Joi.string().email().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(128).required(),
			firstName: Joi.string().max(128),
			lastName: Joi.string().max(128)
    }
};

module.exports = {
	create,
	update
};
