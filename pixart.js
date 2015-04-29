
var controls = document.querySelector(".controls")
var form = document.querySelector("#form")
var field = document.querySelector("#color-field")
var button = document.querySelector("#set-color")
var brush = document.querySelector(".brush")

var numOfSwatches = 3
for (var i = 0; i <numOfSwatches; i++){
  var swatch = document.createElement("div")
  swatch.setAttribute("class", "swatch")
  swatch.style.float = "left"
  swatch.style.margin = "0 2px"
  controls.insertBefore(swatch, form);
}

form.style.clear = "both"

//When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. 
var swatches = document.querySelectorAll(".swatch")
var swatchCounter = 0
button.addEventListener("click", function (event){
  if(swatchCounter >= numOfSwatches){
    swatchCounter = 0
  }
  event.preventDefault();
  brush.style.background = field.value
  swatches[swatchCounter].style.background = field.value
  swatchCounter++
})

// Using JavaScript, create 8000 divs of the "square" class and append them to the body
for (var i = 0; i <8000; i ++){
  var div = document.createElement("div")
  div.setAttribute("class","square")
  document.body.appendChild(div)
}

// Add functionality so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.
var squares = document.querySelectorAll(".square")
for (var i = 0; i <squares.length; i ++){
  squares[i].addEventListener("mouseover", function (event){
  // event.preventDefault();
  this.style.background = brush.style.background
  })
}

for (var i=0; i < numOfSwatches; i++) {
  swatches[i].addEventListener("click", function (event){
    brush.style.background = this.style.background
  })
}
