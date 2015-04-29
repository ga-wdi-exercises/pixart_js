

var form = document.querySelector("#form")
var field = document.querySelector("#text")
var color = document.getElementById("color-field");

// form.addEventListener("click", function(event)) {
// 	event.preventDefault();
// 	console.log(field.value)
// }
document.getElementById("set-color").addEventListener("submit", function(evt){
    evt.preventDefault();
    document.getElementsByClassName("brush")[0].style.backgroundColor = color.value

})





