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

    .state('our-services', {
        url: "/our-services",
        templateUrl: "views/template.html",
        controller: 'WeDoCtrl'
    })

    // .state('sectors', {
    //     url: "/sectors",
    //     templateUrl: "views/template.html",
    //     controller: 'SectorsCtrl'
    // })

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

    .state('contact-us', {
        url: "/contact-us",
        templateUrl: "views/template.html",
        controller: 'ContactUsCtrl'
    })

    .state('csr', {
        url: "/csr",
        templateUrl: "views/template.html",
        controller: 'CsrCtrl'
    })

    .state('management', {
        url: "/management",
        templateUrl: "views/template.html",
        controller: 'ManagementCtrl'
    })

    .state('about', {
        url: "/about",
        templateUrl: "views/template.html",
        controller: 'AboutCtrl'
    })

    .state('rd-brand', {
        url: "/rd-brand",
        templateUrl: "views/template.html",
        controller: 'RDBrandCtrl'
    })

    .state('piping', {
        url: "/piping/:id",
        templateUrl: "views/template.html",
        controller: 'PipingCtrl'
    })

    .state('tanks-equipments', {
        url: "/tanks-equipments",
        templateUrl: "views/template.html",
        controller: 'TanksCtrl'
    })
    .state('insulation', {
        url: "/insulation",
        templateUrl: "views/template.html",
        controller: 'InsulationCtrl'
    })
    .state('skid-modular', {
        url: "/skid-modular",
        templateUrl: "views/template.html",
        controller: 'ModularCtrl'
    })
    .state('ss-ms', {
        url: "/ss-ms",
        templateUrl: "views/template.html",
        controller: 'SSMSCtrl'
    })

    .state('mission-vision', {
        url: "/mission-vision",
        templateUrl: "views/template.html",
        controller: 'MissionVisionCtrl'
    });

    $urlRouterProvider.otherwise("/home");
    $locationProvider.html5Mode(isproduction);
});

firstapp.filter('serverimage', function() {
    return function(input) {
        if (input) {
            return imgurl + input;
        } else {
            return "";
        }
    };
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
