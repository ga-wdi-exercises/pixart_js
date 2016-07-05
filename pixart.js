$(document).on("ready", function() {
  // console.log('jquery ready broh');

  $('button').on("click", getColor);

  var square = $('<div class="square"></div>');

  for (var i=0; i<20; i++){
    $('body').append(square.clone());
    console.log('so square broh');
  }
})

function getColor(evt) {
  // console.log('button clicked broh');
  evt.preventDefault();
  var colorName = $('#color-field').val();
  // console.log(colorName);
  $('.brush').css("background-color", colorName);
  // console.log($('.brush').css("background-color"));
}
