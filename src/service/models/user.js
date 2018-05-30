"use strict";

const bcrypt = require('bcryptjs');

// TODO: Mongoose?
const userSchema = {
	username: String,
	firstName: String,
	lastName: String,
	email: String
};

const get = (userId) => {
	//TODO: Complete this with db query
	return {
		id: 1,
		firstName: 'Leslie',
		lastName: 'Knope',
		email: 'lknope@example.dev',
		username: 'lknope@example.dev'
	};
}

const save = (user) => {
	//TODO: save to db
	return user;
}

module.exports = {
	get,
	save
}
