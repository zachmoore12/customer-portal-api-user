import express from 'express';

// TODO: Add route files

const router = express.Router();

// TODO: router.use('/users', :userRoutes)
// TODO: router.use('/auth', :authRoutes)

router.get('/status', (req, result) => result.send('Hello!'));

module.exports = {
	v1: router
};
