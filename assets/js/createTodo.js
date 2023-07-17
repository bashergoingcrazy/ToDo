document.addEventListener('DOMContentLoaded', ()=>{
    const createTaskButton = document.getElementById('createTaskButton');
    const createForm = document.getElementById('createForm');
    createTaskButton.addEventListener('click',(event)=>{
        const description = document.getElementById('addDescription');
        const dueDate = document.getElementById('dueDate');
        if(description.value.trim()===''){
            alert('To create a task please add its description and due date first');
            event.preventDefault()
            return;
        }
        if(dueDate.value.trim()===''){
            alert('To create a task please add its description and due date first');
            event.preventDefault()
            return;
        }

        
        createForm.submit();
    })
})