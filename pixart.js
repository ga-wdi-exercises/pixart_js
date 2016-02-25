//enter text

var textColor = document.getElementById("color-field");
var brush = document.querySelector(".brush");
var button = document.getElementById("set-color");
var input = document.querySelector("#color-field"); //Can you put IDs in a query selector? Yes, but you need the #.  If you have a class, be sure it has a "." atthe beginning.
var clickButton = document.querySelector("button");


//Commit #1 - click button and apply change of event to click.

  //When "set color" button is clicked,  .brush class background color changes to the color word typed in input element.documentQuerySelector()
var changeColor = function() {
  brush.style.backgroundColor = input.value;  //I had to look at the answer to to get the correct syntax "brush.style.backgroundColor" and "input.value". Still, I cannot get it to work.
};

button.addEventListener("click", changeColor);

//Commit #2 - enter key

button.addEventListener("onkeypress", changeColor);

//Commit #3 - Create 20 divs

var createDivs = function() {
  for (var i = 0; i < 20; i ++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "square");
    document.body.appendChild(newDiv);
  }
};
createDivs();
//Commit #4 - change square color

//I had to look at the solution to find out remind me it refers to the divs from commit #3.

var square = document.getElementsByClassName("square");

var paintSquare = function() {
  square.style.backgroundColor = input.value;   //Background color is undefined.
};

  //for (var i = 0; i < square.length; i++) {
  //square[i].addEventListener("mouseover", paintSquare);
  //}

//Commit #5 - Click on squares

for (var i = 0; i < square.length; i++) {
square[i].addEventListener("click", paintSquare);     //Background color is undefined.
}
