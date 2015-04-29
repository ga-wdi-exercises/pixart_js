var color;
var colorButton = document.querySelector("#set-color");
colorButton.addEventListener("click",changeBrush);
// #element.method(event_name,function)

function changeBrush(){
  event.preventDefault();
  var brush =document.querySelector(".brush");
  // brush.style.backgroundColor = "red";
  var colorField = document.querySelector("#color-field");
  brush.style.backgroundColor = colorField.value;
  color = brush.style.backgroundColor;
}

for(var i =0;i < 8000;i++){
  var createSquare = document.createElement("div");
  createSquare.className = 'square';
  var singleSquare = document.body.appendChild(createSquare);

}
//below was for earlier part of homework
// for(var i =0;i < 20;i++){
//   var createSquare = document.createElement("div");
//   createSquare.className = 'square';
//   var singleSquare = document.body.appendChild(createSquare);
//
// }


var twentySquares = document.querySelectorAll(".square");
// var twenty_squares = document.getElementsByClassName("square");

// for(var i in twentySquares)
for(var i = 0;i < twentySquares.length;i++)
{
  twentySquares[i].addEventListener("mouseover",changeSquare);
  // twentySquares[i].addEventListener("click",changeSquare);
}
// twentySquares.addEventListener("mousedown",changeSquare);
//above doesn't work, have to lope through each one in the array

function changeSquare(){
  //below is for part 4//
  // this.style.backgroundColor = "green";
  this.style.backgroundColor = color;

  // twentySquares[i].style.backgroundColor = "green";
}
// twentySquares[i].style.backgroundColor = window.getComputedStyle(document.querySelector(".brush"))["background-color"];
// the above gives me the values in memory when value is not defined in style
// troubleshooting steps below.  console.dir gives you all the attribute values
// console.log("TEST");
// console.dir(document.querySelector("#set-color"));
// console.dir(document.querySelector("#color-field").value);
// apply the color to twentySquares
