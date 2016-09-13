

function getAndSetColor() {
  var color = $("#color-field").val();
  $(".brush").css("background",color);
  event.preventDefault();
}

/*  Main Line code */
if(typeof jQuery === "function"){
  console.log('jQuery loaded!')
}
/* register click events */

var button=$("button");
button.on( "click", getAndSetColor );

// $(".brush").css("background","red");
