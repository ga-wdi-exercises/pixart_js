// commit 1
var userInput = $("#color-field");
$("#set-color")[0].addEventListener("click", function(){
  event.preventDefault();
//  console.log("button clicked");
//  console.log(userInput.val());
  $(".brush").css("background", userInput.val());
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

// commit 3
// create 20 divs, class square
// append divs to body
$("window").load(appendSquares());

function appendSquares(){
  for (var i = 0; i < 20; i++) {
    console.log("window has loaded");
    $("body").append( $("<div></div>").addClass("square"));
  }
}
