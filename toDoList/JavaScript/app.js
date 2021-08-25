//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners  
 todoButton.addEventListener('click', addTodo);

//Functions 
function addTodo(event){
    console.log('hello');
    // Prevent form from submitting
    event.preventDefault();
    // New Todo item DIV
    const todoDIV = document.createElement('div');
    todoDIV.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = 'im bornd';
    todoDIV.appendChild(newTodo);
    // Create Mark Button
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.innerHTML = '<i class="fas fa-check-circle"></i> ';
    todoDIV.appendChild(completeButton);
    // Create Trash Button
    const trashButton = document.createElement('button');
    trashButton.classList.add('complete-btn');
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    todoDIV.appendChild(trashButton);
    // Append to List  
    todoList.appendChild(todoDIV);
    
}  