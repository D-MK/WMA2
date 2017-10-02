"use strict";

angular.module("toDoList")
.controller("myMainCtrl", function($scope, dataService){
  //adding new toDo

  $scope.addToDo = function(){
    var toDo = {name: $scope.newToDo };
    $scope.toDos.unshift(toDo);
    $scope.newToDo=''/*
    Code Reuse Ref: http://www.ustutorials.com/angularjs-tutorials/create-angularjs-to-do-application.php
    cleares the input once enter any text in input
    */
  };
  //calling saved toDos
  dataService.getTodos(function(response){
    console.log(response.data);
    $scope.toDos = response.data;
  });
//deleting toDo
  $scope.deleteToDo = function(toDo, $index){
    dataService.deleteToDo(toDo);
    $scope.toDos.splice($scope.toDos.indexOf(toDo), 1);
    /*Code Reuse to ensure correct item is deleted
    Ref: https://stackoverflow.com/questions/16118762/angularjs-wrong-index-after-orderby
    */
  };
//saving
  $scope.saveToDos = function(){
  var filteredToDos =  $scope.toDos.filter(function(todo){
      if(to.edited){
        return todo;
      }

    })
    dataService.saveToDos(filteredToDos);

  }

})
