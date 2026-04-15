const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("tasklist");
let taskArray = JSON.parse(localStorage.getItem("taskArray"))  || [];

 //CRUD -Create, Read, Update, Delete

 // Create  = create a new task
 addBtn.addEventListener("click", function(){
    
    const newTask = input.value.trim();
    if (newTask === ""){
     alert("please enter a task");
     return;
    }

      const TASK = {
      id : Date.now(),
      text : newTask,
      done : false
      }

      console.log(TASK);

      taskArray.push(TASK);
      localStorage.setItem("taskArray", JSON.stringify(taskArray));


      const li = document.createElement("li");
      li.textContent = newTask;
      list.appendChild(li);

      input.value = "";
 })//it works


 

 // Edit button for each task
const editBtn = document.createElement("button");
editBtn.textContent ="Edit" ;
li.appendChild(editBtn);

editBtn.addEventListener("click", function(){
   const updatedTask = prompt("Enter the updated task", li.innerText);
   if(updatedTask !== null && updatedTask.trim() !== ""){
      li.textContent = updatedTask.trim();
      li.appendChild(editBtn);
   }
})

// Delete button for each task
const deleteBtn =document.createElement("button");
deleteBtn.textContent = "Delete"
li.appendChild(deleteBtn);
deleteBtn.addEventListener("click", function(){
   li.remove();
})





 

 // Read - display tasks (already done by default)

 // Edit - update a task
 

 
