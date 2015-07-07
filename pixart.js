function changeColor() {
  event.preventDefault();
 $(".brush").css("background", (document.getElementById("color-field")).value);
};

$("button")[0].addEventListener("click", changeColor);
