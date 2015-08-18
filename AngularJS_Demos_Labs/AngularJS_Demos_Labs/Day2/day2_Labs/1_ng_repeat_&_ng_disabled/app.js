var app = angular.module('myapp', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'Declarative and POJO example';
 // checked = true;
 
 //datamodel namelist is POJO
 $scope.namelist =['Name1','Name2','Name3'];
});
