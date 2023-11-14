var express = require('express');
const { login } = require('../src/controllers');
var userRouter = express.Router();

/* GET users listing. */
userRouter.post('/login', login),

module.exports = userRouter;
