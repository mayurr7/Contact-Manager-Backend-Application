const express = require('express');
const { signnupUser, loginUser, checkUser } = require('../controllers/userControler');

const router = express.Router();

router.post("/signup",signnupUser);
router.post("/login", loginUser);
router.get('/current', checkUser);

module.exports = router;