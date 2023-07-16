//Initializing our Express Server
const express = require('express');
const app = express();

//Intializing the Port 
const port = 8000;

//Manages the routes in our app
app.use('/',require('./routes'));

//Setting up engine that we use
app.set('view engine', 'ejs');
app.set('views','./views');


//Start our server via listening to port
app.listen(port,function(err){
    if(err){
        console.log(`Error occured : ${err}`);
    }
    console.log('Server Started Successfully');
})