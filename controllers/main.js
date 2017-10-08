"use strict";

angular.module("toDoList")
.controller("myMainCtrl", function($scope, dataService){
  //adding new toDo
  $scope.addToDo = function(){
$scope.toDos = $scope.toDos || [];
/*ensuring if no array is present that it gets created
Code reuse ref: https://stackoverflow.com/questions/26273043/cannot-read-property-push-of-null
*/
    var toDo = {name: $scope.newToDo };
  $scope.toDos.push(toDo);
//push newly created toDo into the array
    $scope.newToDo=""/*
    Code Reuse Ref: http://www.ustutorials.com/angularjs-tutorials/create-angularjs-to-do-application.php
    cleares the input once enter any text in input
    */
    localStorage.setItem("name", JSON.stringify($scope.toDos));
    //add the array as a string to local storage
  };
  //calling saved toDos
  dataService.getTodos(function(response){
    console.log(response.data);
//calling the list from local storage
    $scope.toDos = JSON.parse(localStorage.getItem("name"));

  });
//deleting toDo
  $scope.deleteToDo = function(toDo, $index){
    dataService.deleteToDo(toDo);
    $scope.toDos.splice($scope.toDos.indexOf(toDo), 1);
    localStorage.setItem("name", JSON.stringify($scope.toDos));
    /* Deleting the toDo from the array,
    and also updating the local storage to reflect the change
    Code Reuse to ensure correct item is deleted
    Ref: https://stackoverflow.com/questions/16118762/angularjs-wrong-index-after-orderby
    */
  };
//saving
  $scope.saveToDos = function(){
    console.log("saving");
localStorage.setItem("name", JSON.stringify($scope.toDos));

  var filteredToDos =  $scope.toDos.filter(function(todo){


  });
    dataService.saveToDos(filteredToDos);

  }

})
