import express from 'express';
import userRoutes  from './user';

const router = express.Router();

router.get('/status', (req, result) => result.send('Hello!'));
router.use('/users', userRoutes);

module.exports = {
	v1: router
};
