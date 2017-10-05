"use strict";

angular.module("toDoList")
.service("dataService", function($http){

  this.getTodos = function(callback){
          $http.get('data/todo.json')
                .then(callback)
              };
this.deleteToDo = function(toDo){
  console.log("the " + toDo.name +  " to do item has been deleted")
};
  this.saveToDos = function(toDo){
    localStorage.setItem("task", toDo.name);
    console.log("the " + toDo.name +  " to do item has been saved")
  };
});


// Check if the localStorage object exists
if(localStorage){
    // Store data
    localStorage.setItem("task", toDo.name);

    // Retrieve data
    alert("Hi, " + localStorage.getItem("task"));
} else{
    alert("Sorry, your browser do not support local storage.");
}
