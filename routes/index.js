//creatiing our routing manager
const express = require('express');
const router  = express.Router();
const home_controller = require('../controller/home_controller')

router.get('/',home_controller.homePage);
router.use('/user',require('./users.js'));






//Exporting our created routes 
module.exports = router;


