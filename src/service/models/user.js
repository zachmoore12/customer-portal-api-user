"use strict";

const bcrypt = require('bcryptjs');

const roles = ['admin', 'owner', 'user'];

// TODO: Mongoose?
const userSchema = {
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	email: String,
	role: String
};

const get = (userId) => {
	//TODO: Complete this with db query
	return {
		id: 1,
		firstName: 'Leslie',
		lastName: 'Knope',
		email: 'lknope@example.dev',
		username: 'lknope@example.dev',
		password: 'hashMePassword',
		role: 'admin'
	};
}

const save = (user) => {
	//TODO: save to db
	return user;
}

module.exports = {
	get,
	save,
	roles
}
