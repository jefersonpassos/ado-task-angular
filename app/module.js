var app = angular
  .module('myapp', ['ui.router', 'ngStorage'])
  .controller('appcontroller', ($localStorage) => {
    $localStorage.itens = [];
    // if (!localStorage.getItem('itens')) {
    //   localStorage.itens = '[]';
    // }
  })

// Definindo Rotas
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/templates/lista.html',
      controller: 'TaskController'
    })
    .state('criar', {
      url: '/cirar',
      templateUrl: 'app/templates/criar.html',
      controller: 'createTaskController'
    });

  // Utilizando o HTML5 History API
  // $locationProvider.html5Mode(true);
});

app.controller('TaskController', function ($scope, $localStorage) {
  $scope.itens = $localStorage.itens;
});

app.controller('createTaskController', ($scope, $localStorage) => {

  $scope.adicionaItem = function () {
    $localStorage.itens.push({
      taref: $scope.item.taref,
      dia: $scope.item.dia,
      delete: false
    });
    $scope.item.taref = $scope.item.dia = '';
  };



  $scope.deletaItem = function (tare) {
    var index = $localStorage.itens.indexOf(tare);
    $localStorage.itens.splice(index, 1);
  }

})