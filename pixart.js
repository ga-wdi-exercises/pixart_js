$(document).ready(function() {


  //set brush color helper function
  function setBrushColor() {
    var brushColor = $("#color-field").val();
    $(".brush").css('background', brushColor);
  }

  //add click event listner to set color button
  $("#set-color").click(function(event) {
    event.preventDefault();
    setBrushColor();
  });

  //add submit event listener to text box
  $("#color-field").on("submit", setBrushColor);

  for(var i = 0; i <= 20; i++){
    let html = `<div class="square"></div>`;
    $("body").append(html);
  }

  $("body").delegate(".square", "click", function(){
    $(this).css("background", $(".brush").css("background"));
  });

});
