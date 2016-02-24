// COMMIT 1 & 2
var button = document.querySelector( "button" );            //button
var colorField = document.querySelector( "#color-field" );  //input field
var brush = document.querySelector( ".brush");              //color box

function handleClickEvent (event) {
  event.preventDefault();
  brush.style.background = colorField.value;
}

 button.addEventListener( "click", handleClickEvent );

// COMMIT 3, 4, 5, 6
for (var i = 0; i <= 8000; i++ ) {
  var div = document.createElement( "div" );
  div.classList.add( "square" );
  document.body.appendChild( div );
  div.addEventListener( "mouseover", function() {
    this.style.background = colorField.value;
  });
}
