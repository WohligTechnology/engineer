angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file

        console.log("Testing Consoles");

        $scope.template = TemplateService.changecontent("home");
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.template.banner = "";
        $scope.template.certification = "";
        $scope.navigation = NavigationService.getnav();
        //  TemplateService.footer="views/footerhome.html";
        $scope.trimForURL = function(value){
          return value.toLowerCase().replace(/ /g, '');
        };
        $scope.mySlides = [
            'img/new/image2.jpg',
            'img/new/image3.jpg',
            'img/new/image4.jpg',
            'img/new/image5.jpg',
            'img/new/image6.jpg'
        ];
        NavigationService.getAllSectors(function(data) {
            $scope.AllSectors10 = data;
            console.log('dfghjk',$scope.AllSectors);
            $scope.AllSectors = _.groupBy($scope.AllSectors10, 'type');
            console.log('$scope.AllSectors', $scope.AllSectors);
        });
        NavigationService.getClients(function(data) {
            $scope.AllClients = data;
            // console.log('$scope.AllClients', $scope.AllClients);

        })
        NavigationService.getallslider(function(data) {
            $scope.mySlides = data.image;
            console.log($scope.mySlides);

        })





    })
    // .controller('OverviewCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //     //Used to name the .html file
    //     $scope.template = TemplateService.changecontent("overview");
    //     $scope.menutitle = NavigationService.makeactive("Overview");
    //     TemplateService.title = $scope.menutitle;
    //     $scope.navigation = NavigationService.getnav();
    // })

// .controller('RDBrandCtrl', function($scope, TemplateService, NavigationService, $timeout) {
//   //Used to name the .html file
//   $scope.template = TemplateService.changecontent("rd-brand");
//   $scope.menutitle = NavigationService.makeactive("RD -The Brand");
//   TemplateService.title = $scope.menutitle;
//   $scope.navigation = NavigationService.getnav();
// })

// .controller('SectorsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
//   //Used to name the .html file
//   $scope.template = TemplateService.changecontent("sectors");
//   $scope.menutitle = NavigationService.makeactive("Sectors");
//   TemplateService.title = $scope.menutitle;
//   $scope.navigation = NavigationService.getnav();
// })

.controller('ClientsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("clients");
    $scope.menutitle = NavigationService.makeactive("Clients");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
      TemplateService.banner = "views/banner-client.html";
    // $scope.clients = [
    //   'img/SABMiller.jpg',
    //   'img/carlsberg.jpg',
    //   'img/Unilever.jpg',
    //   'img/de.jpg',
    //   'img/logs.jpg',
    //   'img/diageo.jpg',
    //   'img/serengeti.jpg',
    //   'img/brew.jpg',
    //   'img/zieman.jpg',
    //   'img/coco.png',
    //   'img/loogos.jpg',
    //   'img/set.jpg',
    //   'img/cadbury.jpg',
    //   'img/casella.jpg',
    //   'img/krones.jpg',
    //   'img/lafa.png',
    //   'img/pepsico.jpg',
    //   'img/abbot.jpg',
    //   'img/itc.jpg',
    //   'img/ee.jpg',
    //   'img/tetrapak.jpg',
    //   'img/lakhme.jpg',
    //   'img/ADIE.png',
    //   'img/nyanza.jpg'
    // ];

    NavigationService.getClients(function(data) {
            $scope.AllClients = data;
            $scope.AllClients = _.chunk($scope.AllClients, 8);
            for (var i = 0; i < $scope.AllClients.length; i++) {
                $scope.AllClients[i] = _.chunk($scope.AllClients[i], 4);
                console.log($scope.AllClients);
            }
            console.log("this is client");
            console.log($scope.AllClients);
        })
        // $scope.clients = _.chunk($scope.clients, 12);
        // for (var i=0;i<$scope.clients.length;i++)
        // {
        //   $scope.clients[i]=_.chunk($scope.clients[i],6);
        // }
        // // $scope.clients.push(_.chunk(12));
        // console.log("this is client");
        // console.log($scope.clients);
})









.controller('CareersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("careers");
        $scope.menutitle = NavigationService.makeactive("Careers");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
          TemplateService.banner = "views/banner-career.html";
    })
    .controller('ContactUsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("contactus");
        $scope.menutitle = NavigationService.makeactive("Contact Us");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
          TemplateService.banner = "views/banner-contact.html";
    })

.controller('CsrCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("csr");
    $scope.menutitle = NavigationService.makeactive("CSR");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.banner = "views/banner-csr.html";
})

// .controller('ManagementCtrl', function($scope, TemplateService, NavigationService, $timeout) {
//     //Used to name the .html file
//     $scope.template = TemplateService.changecontent("management");
//     $scope.menutitle = NavigationService.makeactive("Management");
//     TemplateService.title = $scope.menutitle;
//     $scope.navigation = NavigationService.getnav();
//     TemplateService.banner = "views/banner-management.html";
// })

.controller('MissionVisionCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("mission");
    $scope.menutitle = NavigationService.makeactive("Mission & Vision");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.banner = "views/banner-mission.html";
})

.controller('SectorsCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("piping");
    $scope.menutitle = NavigationService.makeactive("Piping");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
      TemplateService.banner = "views/banner-piping.html";
      $scope.mySlides8 = [
          'img/1.png',
          'img/2.png',
          'img/3.png',
          'img/4.png',
          'img/5.png'

      ];
      setTimeout(function(){
        console.log("abc");
        $('.piping-slider').flexslider({
        animation: "slide",
        move: 4,
        itemWidth: 275,
        itemMargin: 10,
      });
    },2000);
$scope.oneAtATime = true;
    NavigationService.getSector($stateParams.id, function(data) {
        $scope.SectorData = data;
        // console.log('$scope.SectorData', $scope.SectorData.services[0].project.length);
        console.log('SectorData', $scope.SectorData);
    });
  // $(document).ready(function(){
  //
  // });

})

.controller('WeDoCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("ourservices");
    $scope.menutitle = NavigationService.makeactive("Our Services");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.banner = "views/banner-services.html";
})

.controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("about");
    $scope.menutitle = NavigationService.makeactive("About RD");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.ticker = '';
})

// .controller('PipingCtrl', function($scope, TemplateService, NavigationService, $timeout) {
//   //Used to name the .html file
//   $scope.template = TemplateService.changecontent("piping");
//   $scope.menutitle = NavigationService.makeactive("Piping");
//   TemplateService.title = $scope.menutitle;
//   $scope.navigation = NavigationService.getnav();
// })

.controller('TanksCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("tanks");
    $scope.menutitle = NavigationService.makeactive("Tanks and Equipments");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('InsulationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("insulation");
    $scope.menutitle = NavigationService.makeactive("Hot & Cold Insulation");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.mySlides1 = [
        'img/1.png',
        'img/2.png',
        'img/3.png'

    ];
    $scope.mySlides2 = [
        'img/4.png',
        'img/5.png',
        'img/6.png'

    ];
})

.controller('ModularCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("skidmodular");
    $scope.menutitle = NavigationService.makeactive("Skid & Modular Plants");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('SSMSCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("ssms");
    $scope.menutitle = NavigationService.makeactive("SS & MS steel structure");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
})

;
