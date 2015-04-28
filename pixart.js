var form = document.querySelector('#form')
var field = document.querySelector('#color-field')
var box = document.querySelector(".brush")

form.addEventListener("submit", function( event ){
  event.preventDefault();
  console.log(field.value)
  box.style.backgroundColor = field.value
})

// var div = document.createElement("div")
// document.body.appendChild( div )

for(var i = 1; i < 26; i++){
  var div = document.createElement("div")
  div.className = "square"
  document.body.appendChild( div )
}
