const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click',(event)=>{
    fetch('/user/delete-done-tasks',{method:'GET'})
    const checkedItems = document.querySelectorAll('.custom-checkbox:checked');
    checkedItems.forEach(item => item.closest('li').remove());
})