// commit 1
var userInput = $("#color-field");
$("#set-color")[0].addEventListener("click", function(){
  event.preventDefault();
//  console.log("button clicked");
//  console.log(userInput.val());
  if($("#brushOne").css("background-color") === "rgb(231, 229, 219)") {
    $("#brushOne").css("background-color", userInput.val());
  } else {
    $("#brushThree").css("background-color", $("#brushTwo").css("background-color"));
    $("#brushTwo").css("background-color", $("#brushOne").css("background-color"));
    $("#brushOne").css("background-color", userInput.val());
  }
  userInput.val("");
})

// commit 2
$("set-color").keypress(function (e) {
 var key = e.which;
 if(key == 13)  {
    $(".brush").css("background", userInput.val());
    userInput.val("");
  }
});

// commit 3 - append 20 divs
// commit 4 - add click event listener and change to green
// commit 5 - change green to color of brush background
$("window").load(appendSquares());

function appendSquares(){
  for (var i = 0; i < 8000; i++) {
//    console.log("window has loaded");
    $("body").append( $("<div></div>").addClass("square").mouseover(function(){
      $(this).css("background-color",$(".brush").css("background-color"));
    }));
  }
}
