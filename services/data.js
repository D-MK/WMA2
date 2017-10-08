"use strict";




angular.module("toDoList")
.service("dataService", function($http){

  this.getTodos =  function(callback){
          $http.get('data/todo.json')
                .then(callback);
              };
this.deleteToDo = function(toDo){
  console.log("The to do item has been deleted");
};
  this.saveToDos = function(toDo){

    console.log("The to do item has been saved");
  };
});
