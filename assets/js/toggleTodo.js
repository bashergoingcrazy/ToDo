

document.addEventListener('DOMContentLoaded',()=>{
    const checkBoxes = document.querySelectorAll('.custom-checkbox');
    checkBoxes.forEach(checkBox =>{
        checkBox.addEventListener('click',(event)=>{
            const checkBoxId = event.target.id;
            const liElement = checkBox.closest('li');
            const todoId = liElement.id;
            console.log(todoId);

            fetch(`/user/toggle-is-done/${todoId}`,{method:'GET'})
            .then(()=>{
                console.log('updated successfully');
            })
            .catch(err=>{
                console.log('An Error occured :',err);
            })
            
            
            
        })
    })
})