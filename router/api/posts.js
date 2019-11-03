const express = require('express');
const postRouter = express.Router();

postRouter.get('/', (req, res) => res.send('Posts route'));

module.exports = postRouter;
