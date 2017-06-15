/*----CONTROLLERS----*/

var myApp = angular.module('myApp', []);

// service(GiphyService) needs to be injected into controller before it can be used
myApp.controller('GiphyController', function(GiphyService){
  var vm = this;

  vm.randomGif = function(){
    console.log('In randomGif');
    GiphyService.getRandom().then(function(){
      console.log('Back in the controller with:', GiphyService.dataWeWant);
      vm.data = GiphyService.dataWeWant;
    });
  }; // end randomGif function

  vm.searchGif = function(input){
    console.log('Button clicked in searchGif');
    GiphyService.getSearch(input).then(function(){
      console.log('Back with our search results:', GiphyService.searchResultsWeWant);
      vm.searchData = GiphyService.searchResultsWeWant;
    });
  };
}); // end GiphyController
