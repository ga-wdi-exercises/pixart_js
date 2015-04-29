var input = document.getElementById("color-field");

document.getElementById("set-color").addEventListener("click", function(evt){
  evt.preventDefault();
  // console.log(input.value);
  var classy = document.getElementsByClassName("brush")[0];
  classy.style.background = input.value;
})

  for(i = 0; i<=20; i++) {
    var addSquare = document.createElement("div");
    document.body.appendChild(addSquare);
    addSquare.className = "square";
  }

document.getElementById("square").addEventListener("click", function(evt){
  for (i = 0; i<=20; i++) {
    var colorSquare = document.getElementsByClassName("square");
    colorSquare.style.background = green.value;
  }
})
