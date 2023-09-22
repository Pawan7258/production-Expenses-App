const express = require('express');
const { loginController, registerController } = require('../controllers/userController');


// Router object
const router = express.Router();


// routers
// POST || LOGIN
router.post('/login', loginController)



// POST || Register
router.post('/register',registerController)

module.exports = router;