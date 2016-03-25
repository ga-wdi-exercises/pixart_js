//color handling
var pBrush = document.querySelector(".brush");
var form = document.querySelector("form");
var newColor = document.querySelector("#color-field");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  pBrush.style.background = newColor.value;
});

for (var i = 0; i < 8000; i ++){
  var div = document.createElement("div");
  div.classList.add("square");
  document.querySelector("body").appendChild(div);
  div.addEventListener("mouseover", function() {
    this.style.background = pBrush.style.background;
  })
}
