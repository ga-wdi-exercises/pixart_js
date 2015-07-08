function changeColor() {
  event.preventDefault();
 $(".brush").css("background", (document.getElementById("color-field")).value);
};

$("button")[0].addEventListener("click", changeColor);

for(var i = 0; i < 8000; i++) {
  var colorSq = document.createElement("colorSq");
  colorSq.classList.add("square");
  document.body.appendChild(colorSq);
};

document.body.addEventListener("mouseover", function () {
  if(event.target.classList.contains("square")) {
    $(event.target).css("background", (document.getElementById("color-field")).value);
  };
});
