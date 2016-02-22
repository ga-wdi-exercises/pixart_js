//when the button is clicked
var button = document.querySelector("button");

button.addEventListener("click", change);
//var color = document.querySelector("#color-field");

//append 20 divs (for loop)
// for(var i = 0; i<20; i++){
//   //var newness;
//   document.createElement("div");
//   $("body").append('<div class="square" id="div'+i+'"></div>');
//   //var newness = document.getElementsByClassName("square");
//   //newness[i].addEventListener("click", greenSquare);
//
//   //.addEventListener("click", greenSquare);
// }


for(var i = 0; i<=20; i++){
  document.createElement("div");
  $("body").append('<div class="square"></div>');

  //change square to .green when clicked
  var index = document.querySelectorAll(".square");
  for(var i=0; i< index.length; i++) {
    (function(i) {
      index[i].addEventListener("click", function() {
        index[i].style.backgroundColor = "green";
      });
      //why is this (i) needed?
    })(i);
  }
}

//change color
function change(event){

  event.preventDefault();

  switch($("#color-field").val()){
    case "red":
    document.querySelector(".brush").style.backgroundColor = "red";
    break;

    case "blue":
    document.querySelector(".brush").style.backgroundColor = "blue";
    break;

    case "purple":
    document.querySelector(".brush").style.backgroundColor = "purple";
    break;

    case "yellow":
    document.querySelector(".brush").style.backgroundColor = "yellow";
    break;

    case "orange":
    document.querySelector(".brush").style.backgroundColor = "orange";
    break;

    case "green":
    document.querySelector(".brush").style.backgroundColor = "green";
    break;

    case "pink":
    document.querySelector(".brush").style.backgroundColor = "pink";
    break;

    case "brown":
    document.querySelector(".brush").style.backgroundColor = "brown";
    break;

    case "gray":
    document.querySelector(".brush").style.backgroundColor = "gray";
    break;

    case "black":
    document.querySelector(".brush").style.backgroundColor = "black";
    break;

    case "white":
    document.querySelector(".brush").style.backgroundColor = "white";
    break;

    default:
    alert("Sorry! " + $("#color-field").val() + " is not supported. \n Please try again.");
  }
}
