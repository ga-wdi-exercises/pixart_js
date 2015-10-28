$(document).ready(function() {
var colorSelect;

$('#set-color').click(color)
function color(evt){
  colorSelect = $('#color-field').val();
  console.log(colorSelect);
  console.log('color select');
  evt.preventDefault();
  $("div.brush").css("background", colorSelect)


$('.square').mouseover(function(){
  $(this).css("background", colorSelect)
  })
}

$('body').append(
  $('<div>')
    .attr("id", "squareDiv")
    .addClass("square")
  )

var pageLimit=8000;
     for(var i = 1; i <= pageLimit; i++) {
      $('body').append('<div id="squareDiv' + i + '" class="square"></ div>' )
    }
  })
