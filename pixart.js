//this changes the div brush color based on user input
$("button")[0].addEventListener("click", function() {
  event.preventDefault();
  document.body.querySelector(".brush").style.background = document.body.querySelector("input").value;
});

//appends 20 div squares using loop, woohoo! Thanks Stack Overflow!
for (var i = 0; i < 20; i++) {
  var myoption = document.createElement("div");
  myoption.setAttribute("class", "square");
  document.body.appendChild(myoption);
}

//This should change the pixel colors to green upon clicking
//Well, at least one square turns green -_-
$(".square")[0].addEventListener("click", function() {
  event.preventDefault();
  document.body.querySelector(".square").style.background = "green";
  // saving this for later? document.body.querySelector("input").value;
});
