angular.module('kpopstore.controllers', [])

.controller('listController', function($location, $products){
  var list = this;

  $products.list().then(function(products){
    list.products = products;
  }, function(error){
    console.log(error);
    alert(error.message);
  }); 
})

.controller('addController', function($products, $location){
  var add = this;

  add.save = function(){
    $products.add(add.product).then(function(){
      $location.path( "/products" );
    }, function(error){
      alert('Error');
      console.log(error);
    });
  };
})

.controller('editController', function($routeParams, $products, $location){
  var edit = this;
  var id = $routeParams.id;

  edit.product = $products.get(id);

  edit.save = function(){
    $products.edit(edit.product).then(function(){
      $location.path( "/products" );
    }, function(error){
      alert('Error');
      console.log(error);
    });
  };
});