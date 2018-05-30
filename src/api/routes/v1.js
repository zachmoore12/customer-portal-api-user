import express from 'express';
import userRoutes  from './user';

const router = express.Router();

router.get('/healthcheck', (req, result) => result.send('Healthy'));
router.use('/users', userRoutes);

module.exports = {
	v1: router
};
