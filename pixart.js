var button = document.querySelector("#set-color");
var colorText = document.querySelector("#color-field");
var bigSquare = document.querySelector(".brush");
var color = "#1B4370";
var pixels = document.querySelector(".pixels");

playPixart();

function playPixart() {
  button.addEventListener("click", setColor); //This also works when "enter" is pressed on the keyboard. Why? Should I create a separate event to ensure this event happens for keying enter on any computer?
  addSquares();
  pixels.addEventListener("click", clickSquare);
}

//When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
function setColor(event) {
  event.preventDefault();
  color = colorText.value;
  bigSquare.style.backgroundColor = color;
}

//Create 20 divs of the "square" class and append them to the body
function addSquares() {
  for (var i = 0; i < 20; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("square");
    pixels.appendChild(newDiv);
  }
}

// Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
// Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.
function clickSquare(event) {
  event.preventDefault();
  event.target.style.backgroundColor = color;
}
