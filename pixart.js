var button = $("button");

var handleClickEvent = function(e){
  e.preventDefault();
  $( "input#color-field" ).keyup(function() {
      var value = $( this ).val();
      $(".brush").css('background-color', value);
    })
    .keyup();
}
button.on("click", handleClickEvent);
