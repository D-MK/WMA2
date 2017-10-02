angular.module("toDoList")
.directive('toDos', function(){ //directives that will be used
  return{
    templateUrl: 'partials/todos.html', // template to use
    controller: 'myMainCtrl', //controller to use
    replace: true //removes the <to-dos> tags
  }

})
