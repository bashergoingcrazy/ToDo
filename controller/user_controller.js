const Todo = require('../models/tasksList');

module.exports.userHandle = function(req,res){
    Todo.find({}).then(tasksList=>{
        console.log(tasksList)
        return res.render('userPage',{title:"HOME", todo_list:tasksList})
    }).catch(err=>{
        console.log(`Error finding in the mongodb : ${err}`)
        return;
    })
}
module.exports.createTodo = function(req,res){
    const {description , dueDate , category }= req.body;
    const newTodo = new Todo({
        description,
        dueDate,
        category,
    })

    newTodo.save()
    .then(()=>{
        console.log('Todo created and stored Successfully')
        return res.redirect('/user');
    })
    .catch((err)=>{
        console.log(`Error occured while saving the data: ${err}`);
        return;
    })
}
module.exports.toggleIsDone = async (req,res)=>{
    const { id } = req.params;

  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    // Toggle the isDone value
    todo.isDone = !todo.isDone;

    // Save the updated document
    const updatedTodo = await todo.save();

    // Redirect back to the previous page
    res.redirect('/user');
  } catch (err) {
    console.error('Error updating todo:', err);
    return res.status(500).json({ error: 'Error updating todo' });
  }
};

module.exports.deleteTasks = async (req,res)=>{
    try{
        await Todo.deleteMany({isDone:true});
        return res.redirect('/user');
    }
    catch(err){
        console.log('Error deleting the tasks',err);
        res.sendStatus(500);
    }
}

