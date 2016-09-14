
//Get and Set color//

var clickColor = $("#set-color");

function getAndSetColor(){
  var inputColor = $("#color-field").val();
  $(".brush").css("background", inputColor);
  event.preventDefault();
}

clickColor.on("click", getAndSetColor);


//append 20 divs//

for (i=0;i<=20;i++){
$( "body" ).append( "<div class='square'></div>" );
}
