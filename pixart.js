//* When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)
function colorChange(){
  var color = window.getComputedStyle(document.getElementById("SetColor"))["background-color"];
  input.addEventListener("onclick", function(event))
  if(event.keyCode === 9){
    event.preventDefault();
    console.log("Color Changed");
    }else{
    console.log("Color Not Changed");
      }
    });
  }
}
//* The same thing should happen when I press the enter key from inside the input field
function changeInsideField(){
    var input = document.getElementById("input");
    input.addEventListener("onclick", function(){
      document.getElementById("color-field").innerText = input.value.length;
    });
  }
//* Using JavaScript, create 20 divs of the "square" class and append them to the body
function colorBoard(){
  for(var x = 0; x < square.length; x++){
    var squareInfo = square[x];
    var image = document.createElement("IMG");
    image.src = imageInfo["ps_neutral.png"];

    document.querySelector(".square").appendChild(image);
  }
}
//* Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
