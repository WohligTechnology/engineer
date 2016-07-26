var adminurl = "http://wohlig.co.in/rdbackend/index.php/json/";

var imgurl = "http://wohlig.co.in/rdbackend/uploads/";
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
            subnav: []
        }, {
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
        }
    ];

    return {
        getnav: function() {
          var subnavGen  = [];
          $http({
              url: adminurl + 'getAllSectors',
              method: "GET"
          }).success(function (data) {
            if(data){
              _.each (data,function (key) {
                  subnavGen.push({
                    name : key.name,
                    classis:"active",
                    link: "sectors({id:"+key.id+",name:'"+key.name.toLowerCase().replace(/ /g,'')+"'})"
                  });
              });
              navigation[1].subnav = subnavGen;
            }
          });
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

        // getAllSectors: function(callback) {
        //     $http.get(adminurl + "getAllSectors").success(callback);
        // },



        // getAllSectors: function(callback) {
        //     $http({
        //         url: adminurl + 'getAllSectors',
        //         method: 'GET'
        //     }).success(callback);
        // },
        getAllSectors: function(callback) {
            return $http({
                url: adminurl + 'getAllSectors',
                method: "GET"
            }).success(callback);
        },
        getSector: function(id, callback) {
            $http.get(adminurl + "getSector?id=" + id).success(callback);
        },
        getClients: function(callback) {
            $http.get(adminurl + "getClients").success(callback);
        },

    };
});
