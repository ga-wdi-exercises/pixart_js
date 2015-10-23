$(document).ready(function() {
  $('button').click(function(evt) {
    evt.preventDefault()
    console.log("Clicked")
  });
});
$('#Set Color').bind('keypress', function(e) {
 if (e.which == 13) {
     console.log('Enter clicked');
 }
 });

$('body').append('<div class = "square">' + toAdd + '</div>');
$(function() {
  $('.square').click(function() {
    $(this).css('.square', 'yellow');
  });
});
