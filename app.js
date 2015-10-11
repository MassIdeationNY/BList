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
        var foo = {title: 'Foo', description: 'This is a Foo'};
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
