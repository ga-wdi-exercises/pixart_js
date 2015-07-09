// commit 1
var userInput = $("#color-field");

function setPaintSwatches(){
  if($("#brushOne").css("background-color") === "rgb(231, 229, 219)") {
    $("#brushOne").css("background-color", userInput.val());
  } else {
    $("#brushThree").css("background-color", $("#brushTwo").css("background-color"));
    $("#brushTwo").css("background-color", $("#brushOne").css("background-color"));
    $("#brushOne").css("background-color", userInput.val());
  }
  userInput.val("");
}
$("#set-color")[0].addEventListener("click", function(){
  event.preventDefault();
  setPaintSwatches();
})

// commit 2
$("set-color").keypress(function (e) {
 var key = e.which;
 if(key == 13)  {
   setPaintSwatches();
  }
});

$("#brushTwo").on("click", function(){
  userInput.val($("#brushTwo").css("background-color"));
  $("#brushTwo").css("background-color", $("#brushOne").css("background-color"));
  $("#brushOne").css("background-color", userInput.val());
  userInput.val(""); 
})

$("#brushThree").on("click", function(){
  userInput.val($("#brushThree").css("background-color"));
  setPaintSwatches();
})


$("window").load(appendSquares());

function appendSquares(){
  for (var i = 0; i < 8000; i++) {
    $("body").append( $("<div></div>").addClass("square").mouseover(function(){
      $(this).css("background-color",$("#brushOne").css("background-color"));
    }));
  }
}
