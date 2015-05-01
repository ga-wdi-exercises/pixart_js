var setBoxColor = function( event ){
	event.preventDefault(); //prevent the page refreshing when the button is clicked
	colorField = document.getElementById("color-field") //get the colour input from the user via the text field
	chosenColor = colorField.value
	var brush = document.querySelector(".brush") //find the brush object
	brush.style.backgroundColor = chosenColor
}

var setColorButton = document.getElementById("set-color")
setColorButton.addEventListener("click", setBoxColor);

for(i = 0; i < 8001; i++) {
	var square = document.createElement('div');
	square.className = "square";
	square.addEventListener("mouseover", function(event){
		this.style.backgroundColor = chosenColor;
	})
	document.body.appendChild(square);
}

//bonus
for(i = 0; i < 4; i++) {
	var swatch = document.createElement('div'); //make swatches
	swatch.className = "swatch" //associate css for swatches
	swatch.addEventListener("submit", function(event){//collect colour information when user submits
		this.style.backgroundColor = chosenColor; //change colour of swatches
	})
	document.body.insertBefore(swatch, square); //put the swatch between the brush box and the field of squares
	//somehow need to keep the colours, maybe move the existing colour over and replace with the new colour when the set color button is clicked?
	//make the swatches clickable so that they change the brush box color - something like swatch.addEvent Listener("click", function(event){this.style.backgroundColor = chosenColor;})
}

