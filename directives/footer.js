angular.module("toDoList")
.directive('footer', function(){ //directives that will be used
  return{
    templateUrl: 'partials/footer.html', // template to use
    controller: 'myMainCtrl', //controller to use
    replace: true, //removes the <footer> tags
  }

});
