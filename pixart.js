$(document).ready(function() {
var colorSelect;

$('#set-color').click(color)
function color(evt){
  colorSelect = $('#color-field').val();
  console.log(colorSelect);
  console.log('color select');
  evt.preventDefault();
  $("div.brush").css("background", colorSelect)


$('.square').click(function(){
  $(this).css("background", colorSelect)
  // colorSelect = $('#brush').val();
  // evt.preventDefault();

// var div = $("<div></div>");
// $("#box").append(div);
})

}
// $(function() {
// $('.square').click(function(){
//     $(this).css('background', 'yellow');

//   });
// });

$('body').append(
  $('<div>')
    .attr("id", "squareDiv")
    .addClass("square")
  )
    // .append("<span/>")
var pageLimit=8000;
     for(var i = 1; i <= pageLimit; i++) {
      $('body').append('<div id="squareDiv' + i + '" class="square"></ div>' )
    }
    }
);
