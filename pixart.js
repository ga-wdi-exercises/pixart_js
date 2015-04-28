var form = document.querySelector('#form')
var field = document.querySelector('#color-field')
var box = document.querySelector(".brush")

form.addEventListener("submit", function( event ){
  event.preventDefault();
  console.log(field.value)
  box.style.backgroundColor = field.value
})
