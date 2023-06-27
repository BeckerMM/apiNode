const express = require('express');

const router = express.Router();

const registerUserRoutes = require('./usuarios/controllers/usuarios-controller.js');
router.use(registerUserRoutes());

module.exports = router;