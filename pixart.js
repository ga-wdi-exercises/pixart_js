var colorInput = document.getElementById( "color-field" );
var button = document.getElementById( "set-color" );
var brush = document.querySelector( ".brush" );


// The function immediately below seems to meet the requirements for commit 1 and commit 2.
// What is the best way to do this with the enter key?
// All the answers I found used jQuery.

var setColorClick = function(){
  button.addEventListener("click" , function(evt){
    evt.preventDefault();
    brush.style.backgroundColor = colorInput.value;
  })
}

// Article on `Document.createElement()` on MDN is the only reason I think I figured this out.

var createDivs = function() {
  for (i = 0; i < 20; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class" , "square");
    document.body.appendChild(newDiv);
  }
}

setColorClick();
createDivs();
