
var color = document.getElementById("color-field");

document.getElementById("set-color").addEventListener("click", function(evt){
	evt.preventDefault();
	document.getElementsByClassName("brush")[0].style.backgroundColor = color.value
	console.log("Yay, you just typed")

})

    for(var x = 0; x < 8000; x++) {
      var addSquare = document.createElement("div");
      document.body.appendChild(addSquare)
      addSquare.className = "square";
    }

    var square = document.getElementsByClassName("square");

    for (var j = 0; j < square.length; j++) {
    	document.getElementsByClassName("square")[j].addEventListener("mouseover", function(evt) {
    		var color = document.getElementsByClassName("brush")[0].style.backgroundColor;
    		if (color === "") {
    			color = '#' + Math.random().toString(16).slice(2, 8);
    		}
    		evt.toElement.style.backgroundColor = color;
    	})
    }



 // document.getElementById("color-field").addEventListener("keypress", function(enter) {
 //   enter.preventDefault();
 //   console.log("yo");
 //   var key = enter.which || enter.keyCode;
 //    if (key === 13) { // 13 is enter
 //      // code for enter
 //    }
 // })