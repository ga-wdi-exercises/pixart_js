$(document).on("ready", function() {
    console.log('jquery ready broh');

    $('button').on("click", getInput);
})

function getInput(evt) {
  // console.log('button clicked broh');
  evt.preventDefault();
  var colorName = $('#color-field').val();
  // console.log(colorName);
  $('.brush').css("background-color", colorName);
  // console.log($('.brush').css("background-color"));
}
