//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task')

//Load Event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners(){
  //DOM load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  //Add Event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Remove task event
  clearBtn.addEventListener('click', clearTasks);
  //Filter Tasks
  filter.addEventListener('keyup', filterTasks);
}

function addTask(e){
  if(taskInput.value === ''){
    alert('Are you sure?')
  } else {
    //Create new element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //Append to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li)

    //Store in LS
    storeTaskInLocalStorage(taskInput.value);

    //Clear Input
    taskInput.value = '';
  
    e.preventDefault();
  }  
}

//Get tasks from LS
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    //Create new element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append
    li.appendChild(document.createTextNode(task));
    //Create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //Append to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li)
  })
}

//Store Task
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Tasks
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You Sure?')){
      e.target.parentElement.parentElement.remove();
    }

    //Remove from LS
    removeTaskFromLocalStorage( e.target.parentElement.parentElement);
  }
}

//Remove from Local Storage
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear Tasks
function clearTasks(e){
  //Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  //Clear from LS
  clearTasksFromLocalStorage();
}

//Clear from local storage
function clearTasksFromLocalStorage(){
  if(confirm('Are You Sure?')){
    localStorage.clear();
  }
}

//Filter Tasks
function filterTasks(e){
  const text = e.target.value;

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;

    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else{
      task.style.display = 'none';
    }
  })
}