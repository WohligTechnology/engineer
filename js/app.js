// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
    url: "/home",
    templateUrl: "views/template.html",
    controller: 'HomeCtrl'
  })

    .state('overview', {
    url: "/overview",
    templateUrl: "views/template.html",
    controller: 'OverviewCtrl'
  })

//   .state('overview', {
//   url: "/overview",
//   templateUrl: "views/template.html",
//   controller: 'OverviewCtrl'
// })

.state('sectors', {
url: "/sectors",
templateUrl: "views/template.html",
controller: 'SectorsCtrl'
})

.state('clients', {
url: "/clients",
templateUrl: "views/template.html",
controller: 'ClientsCtrl'
})

.state('careers', {
url: "/careers",
templateUrl: "views/template.html",
controller: 'CareersCtrl'
})

.state('contactus', {
url: "/contactus",
templateUrl: "views/template.html",
controller: 'ContactusCtrl'
});

  $urlRouterProvider.otherwise("/home");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
               target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});
