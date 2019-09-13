const express = require('express');
const userService = require('../../../services/v1/users/users');
const authClientRequest = require('../../../middlewares/authGaurd');
let router = express.Router();

router.get('/:userId', authClientRequest.authClientToken ,userService.getUserById);
router.get('', authClientRequest.authClientToken ,userService.getUsers);

module.exports = router;