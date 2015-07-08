function changeColor() {
  event.preventDefault();
 $(".brush").css("background", (document.getElementById("color-field")).value);
};

$("button")[0].addEventListener("click", changeColor);

for(i = 0; i < 20; i++) {
  var colorSq = document.createElement("colorSq");
  colorSq.classList.add("square");
  document.body.appendChild(colorSq);
};
