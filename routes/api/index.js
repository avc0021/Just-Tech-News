// we're keeping the API endpoints nice and organized while allowing the API to be scalable.
const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;
