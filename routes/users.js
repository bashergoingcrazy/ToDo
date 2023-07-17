//creatiing our routing manager
const express = require('express');
const router  = express.Router();
const user_controller = require('../controller/user_controller')

router.get('/',user_controller.userHandle);
router.post('/create-todo',user_controller.createTodo);
router.get('/toggle-is-done/:id',user_controller.toggleIsDone);
router.get('/delete-done-tasks',user_controller.deleteTasks);



//Exporting our created routes 
module.exports = router;


