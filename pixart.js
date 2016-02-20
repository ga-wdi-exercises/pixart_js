//when the button is clicked
var button = document.querySelector("button");

button.addEventListener("click", change);
var color = document.querySelector("#color-field");

//choose color box (dom) and change it (function)

function change(event){
  //var brush = document.querySelector(".brush");
  //for loop???

  event.preventDefault();

  // if($(color).val() == "red"){
  //    document.querySelector(".brush").style.backgroundColor = "red";
  // }
  switch($(color).val()){
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
    alert("Sorry! " + $(color).val() + " is not supported. \n Please try again.");
  }
}
