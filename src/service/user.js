"use strict";

import httpStatus from 'http-status';
const User = require('./models/user');

const load = async (req, res, next, userId) => {
	try {
		const user = User.get(userId);
		req.locals = { user };
		return next();
	} catch (error) {
		return next(error); // handleError(error);
	}
};

const list = async (req, res, next) => {
  try {
    const users = await User.list(req.query);
    res.users(transformedUsers);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const savedUser = await User.save(req.body);

    res.status(httpStatus.CREATED);
    res.json(savedUser);
  } catch (error) {
    next(error);
  }
};

const read = (req, res) => res.json(req.locals.user);

const update = (req, res, next) => {
	const user = {...req.locals.user, ...req.body};
};

const remove = () => {
	const { user } = req.locals;

  user.remove()
    .then(() => res.status(httpStatus.NO_CONTENT).end())
    .catch(e => next(e));
};


module.exports = {
	load,
	list,
	create,
	read,
	update,
	remove
};
