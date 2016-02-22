var colorInput = document.getElementById( "color-field" );
var button = document.getElementById( "set-color" );
var brush = document.querySelector( ".brush" );


/* The function immediately below seems to meet the requirements for commit 1 and commit 2. What is the best way to do this with the enter key? I wasn't able to find anything that didn't use jQuery, but I'm sure my search wasn't truly exhaustive. */

var setColorClick = function(){
  button.addEventListener("click" , function(evt){
    evt.preventDefault();
    brush.style.backgroundColor = colorInput.value;
  })
}

// Article on `Document.createElement()` on MDN is the only reason I think I figured this out for commit 3.
// If possible, additional explanation of `evt.target` would be appreciated!

var createDivs = function() {
  for (i = 0; i < 20; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class" , "square");
    document.body.appendChild(newDiv);
    newDiv.addEventListener("click" , function(evt){
      evt.target.style.backgroundColor = colorInput.value;
    })
  }
}

setColorClick();
createDivs();
