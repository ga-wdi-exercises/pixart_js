var map;  // Map written in the global scope to access and change when called

function initMap() { // Google maps API setup info to create map easier
  map = new google.maps.Map(document.getElementById('map-div'), {
    center: {lat: -34.397, lng: 150.644},
    scrollwheel: true,
    zoom: 8
  });
}

var App = angular.module("myApp", []); // Main Angular Application

App.controller('masterCtrl', function($scope) { // Master Angular Controller


$scope.loadlocation = function(){ // This scope runs when you click(ng-click) on the input button field using angular

	var query = $("#query").val(); // create variable to call later and get the query value on input in HTML

	var image = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + query + ""; // load picture based on query input
	$scope.img = image;

	var geocode = "https://maps.googleapis.com/maps/api/geocode/json?address=" + query + "%20rd&key=AIzaSyCMUZlWdpM7LBb26c0PGOSxEC57EBJLABY";
	$.getJSON(geocode , function(data){

		console.log(data);

		var coordinates = data.results[0].geometry.location;

		map = new google.maps.Map(document.getElementById('map-div'), {
		  center: coordinates,
		  scrollwheel: true,
		  zoom: 8
		});
		var marker = new google.maps.Marker({
		  map: map,
		  position: coordinates
		});

	})
}

});


$(document).ready(function(){

	var mapicon = $("#map-icon");
	var search = $("#search-icon");

	mapicon.click(function(){
		$(".search-div").hide()
		$("#img-div").hide()
		$("#news-div").hide()
		$("#map-div").show()

	})

	search.click(function(){
		$(".search-div").show()
		$("#img-div").show()
		$("#news-div").show()
		$("#map-div").hide()


	})


})
