$("#set-color").click(function(){event.preventDefault()});

// $("#set-color").click(setColor);


function setColor() {
  // event.preventDefault()
  var color = $("#color-field").val();
  $(".brush").css("background", color);
}

$("#color-field").keypress(function(event){
  if (event.which == 13) {
    setColor();
  } else {
    return;
  }
})
