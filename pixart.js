
var colorField = document.querySelector("#color-field");
var brush = document.querySelector(".brush");

$("#form")[0].addEventListener("submit", function(event){
  event.preventDefault();
  brush.style.backgroundColor = colorField.value;
});

for (var i = 0; i<8000; i++) {
  var divSquare = document.createElement("div");
  divSquare.classList.add("square");
  divSquare.addEventListener("mouseover", function(){
    this.style.backgroundColor = colorField.value;
  });
  $("body").append(divSquare);
}
