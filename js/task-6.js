const controls = document.getElementById('controls');  
const input = controls.querySelector('input');  
const createBtn = controls.querySelector('[data-create]');  
const destroyBtn = controls.querySelector('[data-destroy]');  
const boxesContainer = document.getElementById('boxes');  

createBtn.addEventListener('click', () => {  
  const amount = input.valueAsNumber;  
  if (amount < 1 || amount > 100) {  
    return;  
  }  

  createBoxes(amount);  
  input.value = '';  
});  

destroyBtn.addEventListener('click', () => {  
  destroyBoxes();  
});  

function createBoxes(amount) {  
  for (let i = 0; i < amount; i++) {  
    const box = document.createElement('div');  
    box.style.width = `${30 + i * 10}px`;  
    box.style.height = `${30 + i * 10}px`;  
    box.style.backgroundColor = getRandomHexColor();  
    boxesContainer.appendChild(box);  
  }  
}  

function destroyBoxes() {  
  boxesContainer.innerHTML = '';  
}  

function getRandomHexColor() {  
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;  
}
