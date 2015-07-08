var button = $("#set-color")[0];

button.addEventListener("click", changeColor);

function changeColor(){ //Why don't I need to pass event as an argument?
  event.preventDefault();
  var color = $("#color-field").val();
  $("#color-field").val("");
  console.log(color);
  $(".brush").css("background", color);
}

for (var i = 0; i < 8000; i++){
  $( "body" ).append( "<div class='square'></div>");
  $( ".square" )[i].addEventListener("mouseover", colorSquare)
}

function colorSquare(event) {
  $(this).css("background", $(".brush").css("background"));
}
