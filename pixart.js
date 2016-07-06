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






});
