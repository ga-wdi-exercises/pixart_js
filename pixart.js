$(document).on("ready", function()
{
var setcolor=$("#set-color");
setcolor.on("click", changeBoxToInput);

var input=$(":input").val();


function changeBoxToInput(){
  $(".brush").css("background", ":input");
  event.preventDefault()
}
});
