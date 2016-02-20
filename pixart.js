var button = document.querySelector("#set-color");
var color_field = document.querySelector("#color-field");
var brush = document.querySelector(".brush");

button.addEventListener("click", function()
  {
    event.preventDefault();
    brush.style.background = color_field.value;
  });

color_field.addEventListener("keypress", function(e){
  if (13 == e.keyCode) {
   brush.style.background = color_field.value;
  }
});

function createDivs() {
  for (var i = 0; i < 21; i++) {
    var newDiv = document.createElement("div");
    newDiv.className = "square";
    document.body.appendChild(newDiv);
  }
}

function colorOnClick (){
  var squares = document.querySelectorAll(".square");
    for (var i=0;i<squares.length;i++){
        squares[i].addEventListener('click', function(){
          this.style.background = "green";
        });
    }
}
createDivs();
colorOnClick();
