
//Get and Set color//

var clickColor = $("#set-color");

function getAndSetColor(){
  var inputColor = $("#color-field").val();
  $(".brush").css("background", inputColor);
  event.preventDefault();
}

clickColor.on("click", getAndSetColor);


//append 8000 divs//

for (i=0;i<=8000;i++){
$( "body" ).append( "<div class='square'></div>" );
}

//Mouseover to change square to input color//

$(".square").on("mouseover", function(){
  var inputColor = $("#color-field").val();
  $(this).css("background",inputColor);
})
