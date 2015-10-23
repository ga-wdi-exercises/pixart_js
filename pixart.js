var setColor = $("#set-color")
var colorField = $("#color-field")
var color
var swatch = []//initialize the array

$(document).ready(function(){

  setColor.on("click",function(evt){
    evt.preventDefault();
    color = colorField.val()
    swatch.unshift(color)//add entered color to the front of the swatch array
    $(".brush").eq(0).css("background-color",swatch[0])//change the color of the brush boxes depending on the swatch array colors brush index 0 is the color in swatch index 0
    $(".brush").eq(1).css("background-color",swatch[1])
    $(".brush").eq(2).css("background-color",swatch[2])
  })

  $(".brush").on("click",function(){
    color = this.style.backgroundColor//depending on which brush square is clicked(this sets the context of the click) the color of the mouse over event(called color) is changed
  })
    for(var i=0;i<=8000;i++){
      var square = document.createElement("div")//creates a div element called div
      square.classList.add('square')//adds the class 'square' to the div element
      document.body.appendChild(square)//appends the div element to the body as its child
      }

    $('.square').on("mouseover",function(evt){
      console.log(evt.clientX, evt.clientY)
      this.style.backgroundColor = color//this represents the square being clicked/moused over-- event.target also works as a replacement for this
      })
})
