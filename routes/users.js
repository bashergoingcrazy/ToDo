//creatiing our routing manager
const express = require('express');
const router  = express.Router();
const user_controller = require('../controller/user_controller')

router.get('/',user_controller.userHandle);






//Exporting our created routes 
module.exports = router;


