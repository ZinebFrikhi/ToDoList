
var taskInput = document.getElementById("new-task"); 
var ajouterButton = document.getElementsByTagName("button")[0];
var notDoneTask = document.getElementById("tasknotdone");
var DoneTask = document.getElementById("taskdone");



var creerNvTask = function(taskString) {
  
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var supprimerButton = document.createElement("button");

  checkBox.type = "checkBox";
  supprimerButton.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
  supprimerButton.className = "supprimer";
  
  label.innerText = taskString;

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(supprimerButton);

  return listItem;
}



var ajouterTask = function() {

  var listItem = creerNvTask(taskInput.value);
  notDoneTask.appendChild(listItem);
  moveTask(listItem, taskDoneFct);
  taskInput.value = "";
}


var supprimerTask = function () {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}


var taskDoneFct = function() {
   console.log("Task Complete...");
   var listItem = this.parentNode;
   DoneTask.appendChild(listItem);
   moveTask(listItem, taskNotDoneFct);
}


var taskNotDoneFct = function() {
  var listItem = this.parentNode;
  notDoneTask.appendChild(listItem);
  moveTask(listItem, taskDoneFct);
}

ajouterButton.addEventListener("click", ajouterTask); 


var moveTask = function(taskListItem, checkBoxEventHandler) {
    var checkBox = taskListItem.querySelector('input[type="checkbox"]');
    var supprimerButton = taskListItem.querySelector("button.supprimer");
    supprimerButton.onclick = supprimerTask;
    checkBox.onchange = checkBoxEventHandler;
  
}

for (var i = 0; i < notDoneTask.children.length; i ++) {
  moveTask(notDoneTask.children[i], taskDoneFct);
}


for (var i = 0; i < DoneTask.children.length; i ++) {
  moveTask(DoneTask.children[i], taskNotDoneFct);
}


  
  
  
  
  
  
  
  