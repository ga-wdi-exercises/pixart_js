

var setcolor = $("#set-color")

$("#set-color").on("click", function(){
  event.preventDefault()
  var input = document.getElementById("color-field").value;

  $(".brush").css("background", input)
})

//pressing enter works as well

function addSquares(){
  for(var i=0;i<20;i++){
    $("body").append('<div class="square"></div>');
  }
}
