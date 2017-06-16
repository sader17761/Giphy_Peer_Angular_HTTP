/*----CONTROLLERS----*/

var myApp = angular.module('myApp', []);

// service(GiphyService) needs to be injected into controller before it can be used
myApp.controller('GiphyController', function(GiphyService){
  var vm = this;

  vm.searchResultsArray = [];

  vm.randomGif = function(){
    console.log('In randomGif');
    GiphyService.getRandom().then(function(){
      console.log('Back in the controller with:', GiphyService.dataWeWant);
      vm.data = GiphyService.dataWeWant;
    });
  }; // end randomGif function

  vm.searchGif = function(input){
    vm.searchResultsArray.push(input);
    vm.searchIn = '';
    GiphyService.getSearch(input).then(function(){
      vm.searchData = GiphyService.searchResultsWeWant;
    }); // end of getSearch()
  }; // end of searchGif function

  vm.oldSearch = function(input){
    GiphyService.getSearch(input).then(function(){
      vm.searchData = GiphyService.searchResultsWeWant;
    }); // end of getSearch()
  }; // end of searchGif function
}); // end GiphyController
