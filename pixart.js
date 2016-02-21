
var changeColor = document.body.querySelector("button")

//this changes the div brush color based on user input
$("button")[0].addEventListener("click", function() {
  event.preventDefault();
  document.body.querySelector(".brush").style.background = document.body.querySelector("input").value;
});
