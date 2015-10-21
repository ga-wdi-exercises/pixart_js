// Change the color based on what is typed into the input field

$(document).ready(function(){
  $("#set-color").on("click", function(){
    event.preventDefault();
    var theColor = document.getElementById("color-field").value;
    $(".brush").css("background-color", theColor);
  });
})
