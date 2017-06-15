/*---- SERVICES ----*/

// make sure to inject $http into service
myApp.service('GiphyService', function($http){
  var sv = this;

  //this function gets called from the CONTROLLERS
  sv.getRandom = function(){
    console.log('In getRandom');
    // $http calls happen here...
    var apiUrl = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
    return $http.get(apiUrl).then(function(response){
      console.log('This is our response:', response);
      sv.dataWeWant = response.data.data.image_url;
    });
  }; // end of getRandom

  //search function that gets called from the CONTROLLERS
  sv.getSearch = function(input){
    console.log('In getSearch');
    // $http calls happen here...
    var apiUrl = 'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC';
    return $http.get(apiUrl).then(function(response){
      console.log('This is our response', response);
      sv.searchResultsWeWant = response.data.data;
    });
  };
});
