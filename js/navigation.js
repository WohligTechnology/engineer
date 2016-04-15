var adminURL = "";
if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [
    {
    name: "Overview",
    classis: "active",
    anchor: "overview",
    subnav: [{
      name: "About RD +Geography",
      classis: "active",
      link: "#/home"
    },

    {
      name: "Mission and Vision",
      classis: "active",
      link: "#/home"
    },

    {
      name: "Management",
      classis: "active",
      link: "#/home"
    },

    {
      name: "CSR",
      classis: "active",
      link: "#/home"
    },

    {
      name: "RD-The Brand",
      classis: "active",
      link: "#/home"
    }]
  },
    {
    name: "What and how we do",
    classis: "active",
    anchor: "what and how we do",
  },

  {
  name: "Sectors",
  classis: "active",
  anchor: "sectors",
},

{
name: "Clients",
classis: "active",
anchor: "clients",
},

{
name: "Careers",
classis: "active",
anchor: "careers",
},
{
name: "Contact us",
classis: "active",
anchor: "contact us",
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

  };
});
