$(function() {
	var button = $("#set-color");
	var input = $("#color-field");
	var colorBox = $(".brush");
	var swatch = [];

	//when we click the button change the brush color
	button.click(function(event) {
		//because we have a default event on all HTML buttons especially if you are
		//in a form, we want to prevent the browser to do what it usually does and
		//run our own function so we use preventDefault
		event.preventDefault();
		//write a funtion to set the color -- this function takes a prameter and
		//this prameter is the element that we want to change its color
		setColor(colorBox);
		//add to swatch
		handleSwatch();

	});

	//when we hit enter on the input field change the brush color
	input.keypress(function (event) {
	  //event object gives us a prameter called which -- this is the number associated with
	  //the keyboard key that was just pressed.
	  //13 referrs to enter key
	  if (event.which == 13) {
	    setColor(colorBox);
	   	//add to swatch
		handleSwatch();
	   	//prevent the form to be submitted on enter key
	    return false;
	  }
	});

	//add sqyare divs to the body -- we loop to add them
	for (i = 0; i < 7999; i++) {
		//everytime we loop we create a variable called square and set it to be a div with a class of square (for css use)
		//and then attach a click function to each one
		var square = $('<div class="square" />').mouseover(function(event) {
			//we this square div was clicked we use our setColor function to set its color
			//because we designed the setColor function to recieve an element, we can user the 'this' keyword
			//to refere to the div that was just clicked.
			//because in the setColor we want to use jQuery to run a function on the element, we need our element to be
			// a jquery object so jquery knows what to do with it. in this case 'this' is refering to a string '<div class="square"></div>'
			//which is not a jquery object; it is just a string. so to make it a jquery object, all we have to do is to
			//wrap it inside a jquery selector like so: $(this)
			setColor( $(this) );
		});
		$('body').append(square);
	}

	//handle swatch
	function handleSwatch(){
		//reach into input and add its value to our array
		swatch.push(input.val());
		//get our swatch wrapper div and clear it
		$("#swatch-wrap").empty();
		//if our swatch has more than 3 colors, get the last 3 colors from the array
		if(swatch.length > 3){
			swatch = swatch.slice(Math.max(swatch.length - 3, 1));
		}
		//loop through our swatch array and append the swatch divs to the swatch-wrapper
		for (i = 0; i < swatch.length; i++) {
			//set a variable to create a swatch div that we can append to the wrapper
			//we also set a HTML custom data-attr so we can reach back to know the exact color of this swatch
			var swatchChoice = $('<div class="swatch" data-color="'+ swatch[i] +'">').css({background:swatch[i]}).click(function(e){
					//on click get the color from our custom attr
					var swatchColor = $(this).attr('data-color');
					//set the value of our input to this color
					input.val(swatchColor);
					//call our setColor function and pass the colorBox div
					setColor(colorBox);
				});
			$("#swatch-wrap").append(swatchChoice);
		}
	}

	//our setColor function expects a prameter and that prameter should be
	//a DOM object that we can change its CSS background property
	function setColor(element){
		//we reach inside our input to grab its value -- jquery has a short .val() function
		var userColor = input.val();
		//we get the element that was passed to our function and change its background
		//using jquery's .css() function
		element.css({ background : userColor });
