let add_task_btn = document.getElementById('add-task-btn');
let inputBox = document.getElementById('todo-input');
let todoList = document.getElementById('todo-list')
let tasks =JSON.parse(localStorage.getItem("tasks1")) || [];

//Add task
add_task_btn.addEventListener('click',(e)=>{
   
    const inputText = inputBox.value.trim();
    
    if(inputText ==="") return;

    let task = {
        id: Date.now(),
        taskName: inputText,
    };

    tasks.push(task);

    saveTask();
    displayTasks(tasks);
    inputBox.value="";
})

//Save Task
function saveTask(){
    localStorage.setItem("tasks1",JSON.stringify(tasks))
}

//Display Task
function displayTasks(tasks){

  todoList.innerHTML=""
  listItem = document.createElement("li");
   let index=0;

  for (index = 0; index < tasks.length; index++) {
    
    let listItem = document.createElement("li");
    
    const currentTask = tasks[index];
    const currentTaskId = currentTask.id;
  
    listItem.setAttribute("data-id", currentTaskId);
    listItem.innerHTML = `<span>${tasks[index].taskName}</span> <button>delete</button>`;

    let deleteButton = listItem.querySelector("button");
  
    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteTask(currentTaskId);
    });
        
    todoList.appendChild(listItem);
  }

}      
   

//Delete Task
function deleteTask(taskId){
 
    tasks = tasks.filter((t) => t.id !== taskId);
    saveTask(tasks)
    displayTasks(tasks)
}