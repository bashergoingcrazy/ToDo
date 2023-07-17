const mongoose = require('mongoose');

const tasksListSchema = new mongoose.Schema({
    description:{
        type:String,
        required: true
    },
    dueDate:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        default:false
    }
})

const Todo = mongoose.model('Todo',tasksListSchema);
module.exports = Todo;