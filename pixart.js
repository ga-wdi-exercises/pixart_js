console.log("hello!")

var color = $("color-field").val();
var button = $("#set-color")
var body = $("body");

$("#set-color").on("click", colorChange);
  button.on("click", colorChange);

function colorChange (){
  $(".brush").css("background-color", $("#color-field").val());
  event.preventDefault(); //saves color..val(), for input field
}

function colorInput (){
  $(this).css("background-color", $("#color-field").val());
//this, used to describe colorInput
}

for (i=0; i < 8000; i++){
  var div = $("<div class='square'></div>");
  $("body").append(div);
}

$(".square").mouseover(function(){
  $(this).css("background-color", $("#color-field").val());
})
