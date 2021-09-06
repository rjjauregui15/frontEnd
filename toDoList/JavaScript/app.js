//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners  
 todoButton.addEventListener('click', addTodo);
 todoList.addEventListener('click', deleteCheck);
 filterOption.addEventListener('change', filterTodo);
  document.addEventListener('DOMContentLoaded', getTodos);

//Functions 
function addTodo(event) {  
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
    // Add to local storage 
    saveLocalTodos(todoInput.value);
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

 function deleteCheck(event) {
    const item = event.target;
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement; 
        todo.classList.add('fall');
        removeLocalsTodos(todo);
        todo.addEventListener('transitionend', () => {
            todo.remove(); 
        })
    }else if(item.classList[0] == 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(todos => {
        switch(event.target.value){
            case 'all':
                todos.style.display = 'flex';
                break;
            case 'completed':
                if(todos.classList.contains('completed')) {
                    todos.style.display = 'flex';
                }else {
                    todos.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!todos.classList.contains('completed')) {
                    todos.style.display = 'flex';
                }else {
                    todos.style.display = 'none';
                }
                break;
        }
    })
}

function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos =[];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos =[];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    } 
    todos.forEach((todo) => {
        //Todo Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //Create LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        // Create Mark Button
        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-btn');
        completeButton.innerHTML = '<i class="fas fa-check-circle"></i> ';
        todoDiv.appendChild(completeButton);
        // Create Trash Button
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-btn');
        trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        todoDiv.appendChild(trashButton);
         // Append to List  
        todoList.appendChild(todoDiv);
        
    })
}

function removeLocalsTodos(todo) {
    if(localStorage.getItem('todos') === null){
        todos =[];  
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    } 
    //Delete list
    const wordTodo = todo.childNodes[0].innerText;
    todos.splice(todos.indexOf(wordTodo), 1);
    //Push list to LocalStorage
    localStorage.setItem('todos', JSON.stringify(todos));

}