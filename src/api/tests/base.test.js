
const request = require('supertest');
const sinon = require('sinon');

const app = require('../../../index');
const sandbox = sinon.createSandbox();
const { expect } = require('chai');
const httpStatus = require('http-status');

describe("Basic Routing",  () => {
	beforeEach(() => {});
	afterEach(() => sandbox.restore());

	describe('GET /v1/status', () => {
		it('Should return a 200 response with Hello!', () => {
			return request(app)
				.get('/v1/status')
				.expect(httpStatus.OK)
				.then((res) => {
					const status = res.text;
					expect(status).to.be.equal('Hello!');
				})
		})
	});
});
