"use strict";

import Joi from 'Joi';

const create = {
	body: {
			username: Joi.string().email().required(),
      email: Joi.string().email().required(),
			firstName: Joi.string().max(128),
			lastName: Joi.string().max(128)
    }
};

const update = {
	body: {
			username: Joi.string().email().required(),
      email: Joi.string().email().required(),
			firstName: Joi.string().max(128),
			lastName: Joi.string().max(128)
    }
};

module.exports = {
	create,
	update
};
