console.log("hello!")

var color = $("color-field").val();

$("#set-color").on("click", colorChange);



function colorChange (){
  $(".brush").css("background-color", $("#color-field").val());
  event.preventDefault(); //saves color..val(), for input field
}

function colorInput (){
  $(this).css("background-color", $("color-field").val());
//this, used to describe colorInput
}
