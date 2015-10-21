var setColor = $("#set-color")
var colorField = $("#color-field")
var color

$(document).ready(function(){

  setColor.on("click",function(evt){
    evt.preventDefault();
    color = colorField.val()
    $(".brush").css("background-color",color)
  })

  for(var i=0;i<=8000;i++){
    var div = document.createElement("div")
    div.classList.add('square')
    document.body.appendChild(div)

    }



    $('.square').on("mouseover",function(evt){
      console.log(evt.clientX, evt.clientY)
      this.style.backgroundColor = color//this represents the square being clicked/moused over
    })








})
