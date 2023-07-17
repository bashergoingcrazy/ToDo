//Code for Disabling the Past Dates
document.addEventListener('DOMContentLoaded', () => {
    const dueDateInput = document.getElementById('dueDate');
  
    // Disable past dates
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().split('T')[0]; // Format current date as yyyy-mm-dd
    dueDateInput.min = currentDateString;
  
    // Unselect calendar options
    const calendarOptions = document.querySelectorAll('#dueDate option');
    calendarOptions.forEach(option => option.selected = false);
  
    // Blur unnecessary due dates
    calendarOptions.forEach(option => {
      const dateValue = option.value;
      const optionDate = new Date(dateValue);
      
      if (optionDate < currentDate) {
        option.style.filter = 'blur(4px)';
        option.disabled = true;
      }
    });
  });