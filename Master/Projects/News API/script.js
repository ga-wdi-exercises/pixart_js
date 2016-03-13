// Main Angular Application
var App = angular.module("App", []);

// Master Angular Controller
App.controller('masterCtrl', function($scope) {

// Name of the entire scope to access function later
	$scope.loadnews = function(){

// on the input of the box in HTML, save input
	var query = $("#query").val();

	// console.log to check to see if it worked
	console.log(query);



// made an api and added query (which is user value) to use in this web app.
	var api = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=54e9ce018eaee2b1ad66145f4df56d7b:8:74556177";

// made a scope for an array to store all objects I need for later
	$scope.journal = [];

//
	$.getJSON(api , function(data){

// console.log data to see if api information appeared in console
		console.log(data);

		// made a variable for the data in the api. can be found in the console
		var docs = data.response.docs;

// loop though entire data that the api had
		for(var i = 0; i < docs.length; i++){
			// varibale doc equals entire data in docs[i]
			var doc = docs[i];

// I picked certain objects I wanted out of api and set them into variables.
			var snippet = doc.snippet;
			var headline = doc.lead_paragraph;
			var date = doc.pub_date;
			var url = doc.web_url;
			var source = doc.source;

// Push all new information into access array.
			$scope.journal.push({

			snippet: snippet ,
			headline: headline ,
			date: date ,
			url: url ,
			source: source ,

			});

		}

		$scope.$apply(function(){

		console.log($scope.journal);
		})

	}
	);

	}


});
