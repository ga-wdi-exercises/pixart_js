
var changeColor = document.body.querySelector("button")

//this changes the div brush color based on user input
$("button")[0].addEventListener("click", function() {
  event.preventDefault();
  document.body.querySelector(".brush").style.background = document.body.querySelector("input").value;
});

//appends 20 div squares... seems redundant
$("body").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>").append("<div class='square'></div>");

var changeSquareColor = document.body.querySelector("square")
$(".square")[0].addEventListener("click", function() {
  event.preventDefault();
  document.body.querySelector(".square").style.background = "green";
  // document.body.querySelector("input").value;
}
)
