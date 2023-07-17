//initialize mongodb for our app
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/task_list_db');

//establish connection with the DataBase
const db = mongoose.connection;

//If error occures during the connection
db.on('error', console.log.bind(console,'error occured during our connection sorry'));

//If connected successfully then do this!!
db.once('open',function(){
    console.log('Connected to the DB successfully !!!')
})