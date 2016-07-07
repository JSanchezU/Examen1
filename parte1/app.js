angular.module('kpopstore', ['kpopstore.controllers', 'kpopstore.factories', 'ngRoute', 'firebase'])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: "views/products.html",
		controller: 'listController as list'
	})
	.when('/product/:id', {
		templateUrl: "views/product.html",
		controller: 'editController as product'
	})
	.when('/new', {
		templateUrl: "views/product.html",
		controller: 'addController as product'
	})
	.otherwise({
		redirectTo: '/'
	});

	var config = {
    apiKey: "AIzaSyA7j-rZ9qwJrdQBb_DXosyjpZbBZsdqSIw",
    authDomain: "kpop-store.firebaseapp.com",
    databaseURL: "https://kpop-store.firebaseio.com",
    storageBucket: "kpop-store.appspot.com",
  };
  firebase.initializeApp(config);
});

