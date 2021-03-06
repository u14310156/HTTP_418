angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('cropYield', {
    url: '/collectedYields',
    templateUrl: 'templates/cropYield.html',
    controller: 'cropYieldCtrl'      
  })

  .state('splashScreen', {
    url: '/start',
    templateUrl: 'templates/splashScreen.html',
    controller: 'splashScreenCtrl'
  })

  .state('help', {
    url: '/help',
    templateUrl: 'templates/help.html',
    controller: 'helpCtrl'
  })

$urlRouterProvider.otherwise('/start')

  

});