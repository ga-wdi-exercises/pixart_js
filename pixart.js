// I missed the instruction to create a
// branch and just noticed it after going back to the
// first instructions.  So I just created the branch
// and added this to show I know how to do it.

$("#set-color").click(function(){event.preventDefault()});

$("#set-color").click(setColor);


var color = "#1B4370";

console.log($("#brush").css("backgroundColor"));

function setColor() {
  // event.preventDefault()
  moveColor();
  color = $("#color-field").val();
  $("#brush").css("background", color);

}

function moveColor(){
  var brushOne = $("#brush").css("backgroundColor");
  var brushTwo = $("#brush2").css("backgroundColor");
  var brushThree = $("#brush3").css("backgroundColor");
  $("#brush4").css("background",brushThree);
  $("#brush3").css("background",brushTwo);
  $("#brush2").css("background",brushOne);
}

// $("#color-field").keypress(function(event){
//   if (event.which == 13) {
//     setColor();
//   } else {
//     return;
//   }
// })

// past color functionality
$(".easel").children().click(function(){
// checks if brush clicked is already the main brush color
// if so cancels
  if($(this).attr("id") == $("#brush").attr("id")) {
    return;
  } else {

    color = $(this).css("backgroundColor");
    $("#brush").css("background", color);

    // moveColor();
  }
})

function addSquares(){
  for(var i=0;i<8000;i++){
    $("body").append('<div class="square"></div>');
  }
}

addSquares();

$(".square").mouseover(function(){
  $(this).css("background",color);
})
