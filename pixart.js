//this changes the div brush color based on user input
$("button")[0].addEventListener("click", function() {
  event.preventDefault();
  document.body.querySelector(".brush").style.background =
  document.body.querySelector("input").value;
});

//appends 8000 div squares using loop, woohoo!  Thanks Stack Overflow!
for (var i = 0; i < 8000; i++) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "square");
  document.body.appendChild(newDiv);
  //attempting to add event listener upon creating squares...
  newDiv.addEventListener("mouseover", function() {
  this.style.background = document.querySelector("input").value;
});}
