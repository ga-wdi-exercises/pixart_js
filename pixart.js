
// Ask about this
// $(document).ready(function(){
//   event.preventDefault();
// });

// Change the color based on what is typed into the input field

$(document).ready(function(){
  $("#set-color").on("click", function(){
    event.preventDefault();
    var theColor = document.getElementById("color-field").value;
    $(".brush").css("background-color", theColor);
  });
});

// Change the color with the enter key in the submit field. By targetting the #form form instead of #set-color, the page will not refresh upon "submission" of the form with the enter key.
$('#form').submit(function(e){
      e.preventDefault();
      if(e.keyCode == 13){
        $("#set-color").click();
      };
 });

// Appending 8000 div class = square divs to the document
// $(window).load(function() {
  for (var i = 0; i < 8000; i++) {
    $('body').append($("<div></div>", {
      class: 'square'
    }));
  };

// And now make each square turn green when you click on that div square
//     $(".square").on("click", function() {
//       $(this).css("background-color", "green");
//     })
//   }
// });

// And now make it so instead of green, they turn to whatever is in the input field
    $(".square").on("mouseover", function() {
      var theColor = document.getElementById("color-field").value;
      $(this).css("background-color", theColor);
    });
