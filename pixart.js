var form = document.querySelector("#form");
var setColor = document.querySelector("#set-color");
var colorField = document.querySelector("#color-field");
var brush = document.querySelector(".brush");

// when I click on the set color button

  // get input
  // change the color attribute of the clicker to the users input

  setColor.addEventListener("click", function(event){
    event.preventDefault();
    brush.style.background = colorField.value;

  })
  // isn't .click the same for enter ? It works for me.
