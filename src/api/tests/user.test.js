"use strict";

import request from 'supertest';
import sinon from 'sinon';
import { expect } from 'chai';
import httpStatus from 'http-status';
import _ from 'lodash';

const app = require('../../../index');
const service = require('../../service/user');

describe("User Service",  () => {
	let sandbox;
	let mockUsers = [];
	let req = {};
	let res;
	let next = () => {};

	beforeEach(async () => {
		sandbox = sinon.sandbox.create();

		mockUsers = [
			{
				id: 1,
				firstName: 'Leslie',
				lastName: 'Knope',
				email: 'lknope@example.dev',
				username: 'lknope@example.dev',
				password: 'hashMePassword',
				role: 'admin'
			}
		];
	});

	afterEach(() => sandbox.restore());

	describe('GET /v1/users/:userId', () => {
		it('Should return Leslie Knope', async () => {
			const id = 1;
			return request(app)
        .get(`/v1/users/${id}`)
				.expect(httpStatus.OK)
				.then((res) => {
					expect(res.body).to.include(mockUsers[0]);
				});
		});
	});

	describe('POST /v1/users', () => {
		it('Should create and return Leslie Knope', async () => {
			const mockBody = _.omit(mockUsers[0], ['id']);
			return request(app)
        .post(`/v1/users`)
				.expect(httpStatus.CREATED)
				.send(mockBody)
				.then((res) => {
					expect(res.body).to.include(_.omit(mockUsers[0], ['id']));
				});
		});
	});
});
