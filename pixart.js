//this changes the div brush color based on user input
$("button")[0].addEventListener("click", function() {
  event.preventDefault();
  document.body.querySelector(".brush").style.background =
  document.body.querySelector("input").value;
});

//appends 20 div squares using loop, woohoo! Thanks Stack Overflow!
for (var i = 0; i < 20; i++) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "square");
  //attempting to add event listener upon creating squares...
  addEventListener("click", changeColor)
  document.body.appendChild(newDiv);
}

//This should change the pixel colors to green upon clicking
//Well, at least one square turns green -_-
function changeColor() {
  document.body.querySelector(".square").style.background = 'green';}

//attempted diff method for green color clicks:
// $(".square")[0].addEventListener("click", function() {
//   event.preventDefault();
//   document.body.querySelector(".square").style.background = "green";
//   // saving this for later? document.body.querySelector("input").value;
// });
