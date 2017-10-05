"use strict";

angular.module("toDoList")
.service("dataService", function($http){

  this.getTodos = function(callback){
          localStorage.getItem("task")
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
// Code reuse https://www.tutorialrepublic.com/html-tutorial/html5-web-storage.php

/* Check if the localStorage object exists
if(localStorage){
    // Store data
    localStorage.setItem("first_name", "Peter");

    // Retrieve data
    alert("Hi, " + localStorage.getItem("first_name"));
} else{
    alert("Sorry, your browser do not support local storage.");
}*/
