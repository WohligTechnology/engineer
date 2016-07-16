var adminurl = "http://192.168.1.120/rdbackend/index.php/json/";
var imgurl = "http://192.168.1.120/rdbackend/uploads/";
// if (isproduction) {
//     adminURL = "http://www.wohlig.co.in/demo/index.php";
// } else {
//     adminURL = "http://localhost/demo/index.php";
// }

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Overview",
        classis: "active",
        anchor: "overview",
        subnav: [{
            name: "About RD + Geography",
            classis: "active",
            link: "about-geo"
        }, {
            name: "Mission and Vision",
            classis: "active",
            link: "mission-vision"
        }, {
            name: "Management",
            classis: "active",
            link: "management"
        }, {
            name: "CSR",
            classis: "active",
            link: "csr"
        }]
    }, {
        name: "Our Services",
        classis: "active",
        anchor: "our-services",
        subnav: [{
          name: "Piping",
          classis: "active",
          link: "piping"
      }, {
          name: "Tanks and Equipments",
          classis: "active",
          link: "tanks-equipments"
      }, {
          name: "Hot & Cold Insulation",
          classis: "active",
          link: "insulation"
      }, {
          name: "Skid & Modular Plants",
          classis: "active",
          link: "skid-modular"
    }, {
        name: "SS & MS steel structure",
        classis: "active",
        anchor: "ss-ms",
        subnav: []
        }]
    },
     {
        name: "Careers",
        classis: "active",
        anchor: "careers",
        subnav: []
    },
    {
       name: "Clients",
       classis: "active",
       anchor: "clients",
       subnav: []
   },
  //   {
  //      name: "Sectors",
  //      classis: "active",
  //      anchor: "sectors",
  //      subnav: []
  //  },
   {
        name: "Contact Us",
        classis: "active",
        anchor: "contact-us",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

        getAllSectors: function(callback) {
            $http.get(adminurl + "getAllSectors").success(callback);
        },

    };
});
