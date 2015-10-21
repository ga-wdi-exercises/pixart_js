var colorName = $('#color-field');
var colorSet = $('#set-color');
var brushBox = $('.brush');

colorSet.on("click", function(evt) {
  evt.preventDefault();
  brushBox.css("background", colorName.val());
});
