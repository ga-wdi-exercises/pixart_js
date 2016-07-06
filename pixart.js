$(document).ready(function() {
  console.log("Ready!");

  //var colorDiv = $(".brush");
  //var buttonClick = $("#set-color");
  //var inputColor = $("#color-field");


  $("#set-color").on("click", inputColorClick);

  function inputColorClick(e) {
    e.preventDefault();
    $(".brush").css("background", colorFieldSelection);

    function colorFieldSelection() {
      $("#color-field").text($(this).val());

    }
  }
//I got stuck here from fatigue and had to stop, and generally working myself into a corner
//FAIL





});
