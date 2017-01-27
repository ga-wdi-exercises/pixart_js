// I missed the instruction to create a
// branch and just noticed it after going back to the
// first instructions.  So I just created the branch
// and added this to show I know how to do it.

$("#set-color").click(function(){event.preventDefault()});

$("#set-color").click(setColor);


var color = "#1B4370";
console.log(color);

function setColor() {
  // event.preventDefault()
  color = $("#color-field").val();
  $(".brush").css("background", color);
}

$("#color-field").keypress(function(event){
  if (event.which == 13) {
    setColor();
  } else {
    return;
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
