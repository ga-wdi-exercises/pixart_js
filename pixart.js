var setColor = $("#set-color")
var colorField = $("#color-field")
var color

$(document).ready(function(){

  setColor.on("click",function(evt){
    evt.preventDefault();
    color = colorField.val()
    $(".brush").css("background-color",color)
  })

  for(var i=0;i<=20;i++){
    var div = document.createElement("div")
    div.classList.add('square')
    document.body.appendChild(div)
  }









})
