const express = require('express');
const restRouter = express.Router();

restRouter.use('/auth', require('./api/auth'));
restRouter.use('/posts', require('./api/posts'));
restRouter.use('/profile', require('./api/profile'));
restRouter.use('/users', require('./api/users'));

module.exports = restRouter;
