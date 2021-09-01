//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners  
 todoButton.addEventListener('click', addTodo);
 todoList.addEventListener('click', deleteCheck);

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
    newTodo.innerText = todoInput.value;
    todoDIV.appendChild(newTodo);
    // Create Mark Button
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.innerHTML = '<i class="fas fa-check-circle"></i> ';
    todoDIV.appendChild(completeButton);
    // Create Trash Button
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    todoDIV.appendChild(trashButton);
    // Append to List  
    todoList.appendChild(todoDIV);
    todoInput.value = "";
}  

function deleteCheck(event){
    console.log(event.target);
    const item = event.target;
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement; 
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }else if(item.classList == 'conplete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}