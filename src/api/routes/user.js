"use strict";

import express from 'express';
import validate from 'express-validation';
import service from '../../service/user';

import { create, update } from '../shapes';

const router = express.Router();

// PREFIX: /users

// Load User
router.param('userId', service.load);

// List and Create
router.route('/')
	.get(service.list)
	.post(validate(create), service.create);

// Get, Update, Delete
router.route('/:userId')
	.get(service.read)
	.patch(validate(update), service.update)
	.delete();

// Delete
router.route('/');

module.exports = router;
