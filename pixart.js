


var color = document.getElementById("color-field");

document.getElementById("set-color").addEventListener("click", function(evt){
	evt.preventDefault();
    document.getElementsByClassName("brush")[0].style.backgroundColor = color.value

})

