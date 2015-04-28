var form = document.querySelector('#form')
var field = document.querySelector('#color-field')
var box = document.querySelector(".brush")
var boxWrapper = document.createElement("div")

form.addEventListener("submit", function( event ){
  event.preventDefault();
  console.log(field.value)
  box.style.backgroundColor = field.value
})

var div = document.createElement("div")
// document.body.appendChild( div )

//creating a wrapper for all the square boxes
var boxWrapper = document.createElement("div")
boxWrapper.className = "littleBoxes"
document.body.appendChild( boxWrapper )

for(var i = 1; i < 26; i++){
  var div = document.createElement("div")
  div.className = "square"
  document.body.appendChild( div )
  // boxWrapper.appendChild( div )
}

// var divBox = document.querySelectorAll(".littleBoxes")
//   divBox.addEventListener("click", changeGreen)
//   function changeGreen() {
//     divBox.style.backgroundColor = "green"
//   }

//
//   for(int i = 0; i < squares.length; i++){
//     squares[i].addEventListener("click", changeGreen)
//     function changeGreen() {
//     squares[i].style.backgroundColor = "green"
//   }
// event.target.className
for (var j = 0; j < 25; j++){
  document.querySelectorAll(".square")[j].addEventListener('click', function( event ){
    this.style.backgroundColor = field.value
})
}
