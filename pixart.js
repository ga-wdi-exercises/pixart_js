button = document.getElementById("set-color");
button.addEventListener("click", function(event){
	event.preventDefault()
	brush = document.getElementsByClassName("brush")[0]
	new_color = document.getElementById("color-field").value
	brush.style.backgroundColor = new_color
	})
