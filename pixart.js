//* When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)
function colorChange(){
  var color = document.getElementById("SetColor");
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
