var form = document.querySelector("#form");
var setColor = document.querySelector("#set-color");
var colorField = document.querySelector("#color-field");
var brush = document.querySelector(".brush");
var body = document.querySelector("body")
var square = document.querySelector(".square")

// when I click on the set color button

  // get input
  // change the color attribute of the clicker to the users input

  setColor.addEventListener("click", function(event){
    event.preventDefault();
    brush.style.background = colorField.value;

  })

  setColor.addEventListener("keydown", function(event){
    event.preventDefault();
    brush.style.background = colorField.value;

  })

//create body variable
//create a div class called square (in CSS)- never mind, already exists in CSS
//write a function that adds the square div to body - call it to test it
//get the function to replicate 20 times


  function createSquare(){
    body.appendChild(square);
  }

  createSquare();
//get javascript to add it to the body
