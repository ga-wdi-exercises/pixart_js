
//jQuery variables
var $form = $("#form");
var $brush = $(".brush");
var $colorField = $("#color-field");

// Prevents the page from reloading and sets the brush color
$form.on("submit", function(e){
      e.preventDefault();
      $brush.css('background-color', $colorField.val());

    //Creates the squares for the canvas
    for(var i = 0; i < 10080; i++){
      var $squares = $("<div class='square'></div>");
      $("body").append($squares);
    }
    // Changes the color of each square when the mouse is hovering over it
    $(".square").on("mouseover", function(){
      $(this).css('background', $colorField.val());
    })
})


