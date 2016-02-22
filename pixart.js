  var colorField = document.getElementById("color-field").value;
  var setColor = document.getElementById("set-color");

  var brushColor = document.querySelector(".brush");

var pixart = {
  // store text input in a var and use it to manipulate square(brush) color when set-color button is clicked.

// perfom function when button is clicked
  setColor.addEventListener('click', userColor);

// function to set brush color to user input
  userColor: function (){
    e.preventDefault();
    brushColor.backgroundColor = colorField;
}
