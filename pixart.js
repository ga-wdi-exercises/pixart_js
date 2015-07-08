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
// find jquery event for enter key
$("set-color").keypress(function (e) {
 var key = e.which;
 if(key == 13)  {
    $(".brush").css("background", userInput.val());
    userInput.val("");
  }
});
