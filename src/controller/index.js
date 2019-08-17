const express = require('express');

const pictures = require('./picture');
const checkLogin = require('./checkLogin')
const authenticate = require('../middlewares/authenticate');
const login = require('./login');
const register = require('./signup');

const route = express.Router();


// route.use(register);  
// route.use(login);

// Unlock Cookie Middleware
route.use(authenticate);
route.get(checkLogin);
route.use(pictures);

module.exports = route;