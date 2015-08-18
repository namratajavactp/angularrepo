angular.module('dynamicFormApp', [])

.controller('mainController', function($scope) {
  var users = [
      { 
        name: 'Chris',
        email: ''
      },
      {
        name: 'Holly',
        email: ''
      }
  ];  
  
  $scope.formDataTwo = {};
  $scope.formDataTwo.users = users;
  
});