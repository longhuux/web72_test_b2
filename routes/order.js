var express = require('express');
const { authentication } = require('../middlewares/authenticator');
const { getAllOrder } = require('../src/controllers');
var orderRouter = express.Router();

/* GET users listing. */
orderRouter.get('/',getAllOrder),



module.exports = orderRouter;
