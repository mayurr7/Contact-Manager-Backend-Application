const express = require('express');
const { signnupUser, loginUser, checkUser } = require('../controllers/userControler');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

router.post("/signup",signnupUser);
router.post("/login", loginUser);
router.get('/current', validateToken, checkUser);

module.exports = router;