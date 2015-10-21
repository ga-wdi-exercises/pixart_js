$(document).ready(function() {
  $("button").on("click", function(evt) {
    evt.preventDefault();
    colorSelected = $("input:text").val(); //This is correct.
    console.log("the button works...");
    console.log("User input is: " + colorSelected);
    $(".brush").css("background-color", colorSelected);
  })
});
//There is an open loop somewhere in here?!!?

function build20divs() {
  for (var i = 1; i < 20; i++) {
    $(document).ready(function() {
      $('<div />', {
        "class": 'square',
        click: function(e) {
          e.preventDefault;
          //colorSelected2 = $("input:text").val();
          $("square").css("background-color", green);
        },
      });
      //CANNOT USE VANILLA JS WITH jQuery!
      /*var myElement = document.getElementsByClassName("square");
      document.body.appendChild(myElement); /*
    });
  }
}
build20divs();
