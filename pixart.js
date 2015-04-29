var form = document.querySelector("#form")
var field = document.querySelector("#color-field")
form.addEventListener("submit", function(event){
  event.preventDefault();
  document.querySelector(".brush").style.background = field.value
})
