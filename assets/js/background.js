document.addEventListener('DOMContentLoaded', () => {
    const todoDiv = document.getElementById('todo');
    const imagePaths = [
      '/images/image1.jpg',
      '/images/image2.jpg',
      '/images/image3.jpg',
      '/images/image4.jpg',
      '/images/image5.jpg',
      '/images/image6.jpg',
      '/images/image7.jpg',
      '/images/image8.jpg',
      // Add more image paths as needed
    ];
  
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    const selectedImage = imagePaths[randomIndex];
  
    todoDiv.style.backgroundImage = `url(${selectedImage})`;
  });

  