const input = document.querySelector('input');
const paragraph = document.querySelector('#duplicateField');
const button = document.querySelector('button');

input.addEventListener('keydown', (event) => {
    paragraph.textContent = event.target.value;
})


button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(input.value);
    input.value = '';
    paragraph.textContent = '';
})
    

