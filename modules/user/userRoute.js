const express = require('express');
const userCtr = require('./userController');
const userRouter = express.Router();

// let userloginMiddleware = [
//     userMiddleware.validateInput('login'),
//     userCtr.login
// ];
// userRouter.post('/login', userloginMiddleware);

module.exports = userRouter;
