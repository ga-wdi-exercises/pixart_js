
var colorField = document.querySelector("#color-field");
var brush = document.querySelector(".brush");

$("#form")[0].addEventListener("submit", function(event){
  event.preventDefault();
  brush.style.backgroundColor = colorField.value;
});

for (var i = 0; i<20; i++) {
  var divSquare = document.createElement("div");
  divSquare.classList.add("square");
  divSquare.addEventListener("click", function(){
    this.style.backgroundColor = colorField.value;
  });
  $("body").append(divSquare);
}
