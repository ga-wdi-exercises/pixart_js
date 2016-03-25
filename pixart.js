var pBrush = document.querySelector(".brush");
var form = document.querySelector("form");
var newColor = document.querySelector("#color-field");


// //swatches
var swatch1 = document.createElement("div");
swatch1.classList.add("swatch");
document.querySelector("body").appendChild(swatch1)
swatch1.addEventListener("click", cycleColorsSwatch)
var swatch2 = document.createElement("div");
swatch2.classList.add("swatch");
document.querySelector("body").appendChild(swatch2)
swatch2.addEventListener("click", cycleColorsSwatch)
var swatch3 = document.createElement("div");
swatch3.classList.add("swatch");
document.querySelector("body").appendChild(swatch3)
swatch3.addEventListener("click", cycleColorsSwatch)

var line = document.createElement("div");
line.classList.add("divider");
document.querySelector("body").appendChild(line);

//change colors
function cycleColors() {
  event.preventDefault();
  swatch3.style.background = swatch2.style.background;
  swatch2.style.background = swatch1.style.background;
  swatch1.style.background = pBrush.style.background;
  pBrush.style.background = newColor.value;
}

function cycleColorsSwatch() {
  event.preventDefault();
  newC = this.style.background;
  swatch3.style.background = swatch2.style.background;
  swatch2.style.background = swatch1.style.background;
  swatch1.style.background = pBrush.style.background;
  pBrush.style.background = newC;
}

form.addEventListener("submit", cycleColors);

//create paintable area
for (var i = 0; i < 8000; i ++){
  var div = document.createElement("div");
  div.classList.add("square");
  document.querySelector("body").appendChild(div);
  div.addEventListener("mouseover", function() {
    this.style.background = pBrush.style.background;
  })
}
