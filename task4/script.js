const link = document.querySelector('#link')

link.addEventListener('click', (event) => {
  // Сброс поведения ссылки по умолчанию
  event.preventDefault();
  
  link.textContent = prompt('Введите текст');
})
