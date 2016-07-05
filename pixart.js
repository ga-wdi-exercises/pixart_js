var square = $('<div class="square"></div>');

for (var i=0; i<20; i++){
  $('body').append(square.clone());
  // console.log('so square broh');
}

$(document).on("ready", function() {
  // console.log('jquery ready broh');

  $('button').on("click", getColor);
  $('.square').on("click", changeSquare);

})

function getColor(evt) {
  // console.log('button clicked broh');
  evt.preventDefault();
  var brushColor = $('#color-field').val();
  // console.log(colorName);
  $('.brush').css("background-color", brushColor);
  // console.log($('.brush').css("background-color"));
}

function changeSquare() {
  // console.log(this);
  var squareColor = $('#color-field').val();
  $(this).css("background-color", squareColor);
  console.log(squareColor + " squares broh");
}
