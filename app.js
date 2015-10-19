var app = angular.module("TemplateApp", ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
  
  console.log("TemplateApp");
  
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    }).
    when('/detail', {
      templateUrl: 'partials/details.html',
      controller: 'DetailController'
    }).
    when('/search', {
      templateUrl: 'partials/search.html',
      controller: 'SearchController'
    }).
    when('/map', {
      templateUrl: 'partials/map.html',
      controller: 'MapController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);//end route provider

app.controller("HomeController", function($scope,  $http, $location ){
  console.log("HomeController");

  var unitArray = [];
  //
  // cooper s - for when we need data
  //$http.get("http://khalidmills.com/hr/units.json").then(function(r){
  //$http.get("http://harlemreservations-campaigner.rhcloud.com/unit").then(function(r){
  //$http.get("http://127.0.0.1:8080/unit/").then(function(r){
  //});//end http get 

   $scope.go = function ( path ) {
        console.log("click for new view..." + path );
        $location.path( path );
      };

})
.directive('helloWorld', function(){
  return {
    template: 'hello world!!!'
  }
});//end home controller

app.controller("DetailController", function($scope,  $http, $location ){
  console.log("DetailController");

  var unitArray = [];
  //
  // cooper s - for when we need data
  //$http.get("http://khalidmills.com/hr/units.json").then(function(r){
  //$http.get("http://harlemreservations-campaigner.rhcloud.com/unit").then(function(r){
  //$http.get("http://127.0.0.1:8080/unit/").then(function(r){
  //});//end http get 

   $scope.go = function ( path ) {
        console.log("click for new view..." + path );
        $location.path( path );
      };

});//end detail controller

app.controller("MapController", function($scope,  $http, $location ){
  console.log("MapController");

 //Data
      var cities = [
          {
              city : 'Toronto',
              desc : 'This is the best city in the world!',
              lat : 43.7000,
              long : -79.4000
          },
          {
              city : 'New York',
              desc : 'This city is aiiiiite!',
              lat : 40.6700,
              long : -73.9400
          },
          {
              city : 'Chicago',
              desc : 'This is the second best city in the world!',
              lat : 41.8819,
              long : -87.6278
          },
          {
              city : 'Los Angeles',
              desc : 'This city is live!',
              lat : 34.0500,
              long : -118.2500
          },
          {
              city : 'Las Vegas',
              desc : 'Sin City...\'nuff said!',
              lat : 36.0800,
              long : -115.1522
          }
      ];

  //

        var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(40.0000, -98.0000),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

  // try to center map around user's location
            if (navigator.geolocation) {
                                navigator.geolocation.getCurrentPosition(showPosition);
                              } else { 
                                  console.log("Geolocation is not supported by this browser.");
                              }

           function showPosition(position) {
                             var latitude =  position.coords.latitude;
                             var longitude =  position.coords.longitude;

                             var geocoder  = new google.maps.Geocoder();
                             var location  = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          alert("Your location - lat: " + latitude + "long: " + longitude );
        
           var mapOptions = {
                zoom: 15,
                center: new google.maps.LatLng(latitude, longitude ),
                mapTypeId: google.maps.MapTypeId.TERRAIN
            }

            $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        }//end show position

  //
   $scope.go = function ( path ) {
        console.log("click for new view..." + path );
        $location.path( path );
      };

});//end map controller


app.controller("SearchController", function($scope,  $http, $location ){
  console.log("SearchController");

  $scope.names = [
    'World Wide Technology Inc.',
    'ACT-1 Group',
    'Bridgewater Interiors, L.L.C',
    'Modular Assembly Innovations L.L.C.',
    'Manna Inc.',
    'The Anderson-DuBose Cos.',
    'Global Automotive Alliance L.L.C.',
    'Thompson Hospitality ',
    'Radio One Inc.',
    'SET Enterprises Inc.',
    'Fair Oaks Farms L.L.C.',
    'Hightowers Petroleum Co. ',
    'H. J. Russell & Co.',
    'Millennium Steel Service L.L.C.',
    'Manufacturers Industrial Group L.L.C',
    'Mays Chemical Co. Inc.',
    'Millennium Steel of Texas L.P',
    'Baldwin Richardson Foods Co.',
    'Urban Lending Solutions',
    'Harpo Inc.'];

  //
  // cooper s - for when we need data
  //$http.get("http://khalidmills.com/hr/units.json").then(function(r){
  //$http.get("http://harlemreservations-campaigner.rhcloud.com/unit").then(function(r){
  //$http.get("http://127.0.0.1:8080/unit/").then(function(r){
  //});//end http get 

   $scope.go = function ( path ) {
        console.log("click for new view..." + path );
        $location.path( path );
      };

});//end search controller

app.controller('listViewController', ['$scope', function($scope) {

    console.log ("listViewController");

    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];

    $scope.vizzy = true;

     $scope.numberOfPages=function(){
        return Math.ceil($scope.data.length/$scope.pageSize);                
    }

     for (var i=0; i<45; i++) {
        $scope.data.push("Item "+i);
    } 

    $scope.collectionOfFoos = [
        {image: 'http://sonyainc.net/icons/icon.svg', title: 'Business A', description: 'This is Business A'},
        {image: 'http://sonyainc.net/icons/icon.svg', title: 'Business B', description: 'This is Business B'},
        {image: 'http://sonyainc.net/icons/icon.svg', title: 'Business C', description: 'This is Business C'},
        {image: 'http://sonyainc.net/icons/icon.svg', title: 'Business D', description: 'This is Business D'},
        {image: 'http://sonyainc.net/icons/icon.svg', title: 'Business E', description: 'This is Business E'},
        {image: 'http://sonyainc.net/icons/icon.svg', title: 'Business F', description: 'This is Business F'}
    ];
    
    $scope.addAFoo = function addAFoo() {
        console.log("AddFoo...");
        var foo = {image: 'foo image', title: 'Foo', description: 'This is a Foo'};
        $scope.collectionOfFoos.push(foo);   
    }

    $scope.clickMe = function clickMe() {
        console.log("Show Business Detail!");
        
    }

    $scope.showMe = function showMe(what) {
        console.log("Show em the goods!!!" , what);

      switch(what) {
        case 'restaurants':
          if ($scope.vizzy == false ) {
            console.log("hide me...");
            $('#myRestaurants').css('display', 'none');
            $scope.vizzy = true;
           } else {
            console.log("show me...");
            $('#myRestaurants').css('display', 'inline');
            $scope.vizzy = false;
            }
          break;
        case 'bars':
          console.log('Show bars...');
           if ($scope.vizzy == false ) {
            console.log("hide me...");
            $('#myBars').css('display', 'none');
            $scope.vizzy = true;
           } else {
            console.log("show me...");
            $('#myBars').css('display', 'inline');
            $scope.vizzy = false;
            }
          break;
        case 'shopping':
           console.log('Show shopping...');
            if ($scope.vizzy == false ) {
            console.log("hide me...");
            $('#myShopping').css('display', 'none');
            $scope.vizzy = true;
           } else {
            console.log("show me...");
            $('#myShopping').css('display', 'inline');
            $scope.vizzy = false;
            }
           break;
      }//endswitch
    }
}]);//end ListViewController



//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
