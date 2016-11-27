$(function(){
  let $colorField = $("#color-field");
  let $setColor = $("#set-color");
  let $controlsBrush = $(".controls > .brush");

  $setColor.on('click', function(event) {
    event.preventDefault();
    $controlsBrush.css('background-color', $colorField.val());
  });
});
