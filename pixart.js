

var setcolor = $("#set-color")

$("#set-color").on("click", function(){
  event.preventDefault()
  var input = document.getElementById("color-field").value;

  $(".brush").css("background", input)
})
