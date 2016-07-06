$( document ).ready(function() {
  console.log("Ready!");

  var colorDiv = $(".brush");
  var buttonClick = $("#set-color");
  var inputColor = $("#color-field");


  buttonClick.on("click", inputColorClick)

  function inputColorClick(event) {
    event.preventDefault();

  }





});
