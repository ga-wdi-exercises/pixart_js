var form=document.getElementById("form"); //some form that this is in
var input=document.getElementById("color-field"); // where you input text
var button=document.getElementById("set-color"); // set-color button
var brush1=document.querySelector(".brush1");
var brush2=document.querySelector(".brush2");
var brush3=document.querySelector(".brush3");
 //box that changes color
var brush = document.querySelectorAll("li");

//////// MAKE BOX CHANGE COLOR
var clicks=0;

var numberClicks=function(){

	if (clicks=0){}
		button.addEventListener("click", function(event){ 
			event.preventDefault(); //prevents button from changing brush color to original color.
			brush1.style.backgroundColor=input.value;//input.value is = to value put in the input text field.

		})

		for(var i=0; i<8000; i++){ // each i represents a new square.

		var square=document.createElement("div"); // creating div for square class
		square.classList.add("square"); // adds class name to new div element
		document.body.appendChild(square); // inserts created element div to document 
		square.addEventListener("mouseover", function(){
			this.style.backgroundColor=brush1.style.backgroundColor;
			
			})
		clicks++;
		};

	if (clicks=1){}
		button.addEventListener("click", function(event){ 
			event.preventDefault(); //prevents button from changing brush color to original color.
			brush2.style.backgroundColor=input.value;//input.value is = to value put in the input text field.

		})

		for(var i=0; i<8000; i++){ // each i represents a new square.

		var square=document.createElement("div"); // creating div for square class
		square.classList.add("square"); // adds class name to new div element
		document.body.appendChild(square); // inserts created element div to document 
		square.addEventListener("mouseover", function(){
			this.style.backgroundColor=brush2.style.backgroundColor;
			
			})
		clicks++;
		};

	if (clicks=2){}
		button.addEventListener("click", function(event){ 
			event.preventDefault(); //prevents button from changing brush color to original color.
			brush3.style.backgroundColor=input.value;//input.value is = to value put in the input text field.

		})

		for(var i=0; i<8000; i++){ // each i represents a new square.

		var square=document.createElement("div"); // creating div for square class
		square.classList.add("square"); // adds class name to new div element
		document.body.appendChild(square); // inserts created element div to document 
		square.addEventListener("mouseover", function(){
			this.style.backgroundColor=brush3.style.backgroundColor;
			
			})
		clicks++;
		};

	
} // close numberClicks function

numberClicks();
