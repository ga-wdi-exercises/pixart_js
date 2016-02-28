// Main Angular Application
var App = angular.module("App", []);

// Master Angular Controller
App.controller('masterCtrl', function($scope) {
	
	$scope.loadnews = function(){
	
	var query = $("#query").val();
	console.log(query);
	
	$scope.search = query;
	
	var api = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=54e9ce018eaee2b1ad66145f4df56d7b:8:74556177"; 
	$scope.access = [];
	
	$.getJSON(api , function(data){
		console.log(data);
		var docs = data.response.docs;
		
		for(var i = 0; i < docs.length; i++){
			var doc = docs[i];
			
			var snippet = doc.snippet;
			var headline = doc.lead_paragraph;
			var date = doc.pub_date;
			var url = doc.web_url;
			
			$scope.access.push({
			
			snippet: snippet ,
			headline: headline , 
			date: date ,
			url: url
			
			});
			
		}
		
		$scope.$apply(function(){
		
		console.log($scope.access);
		})
		
	}
	);
	
	}
	
	
});