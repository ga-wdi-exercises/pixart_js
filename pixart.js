var colorSelect;

$('#set-color').click(color)
function color(evt){
  colorSelect = $('#color-field').val();
  console.log(colorSelect);
  console.log('color select');
  evt.preventDefault();
  $("div.brush").css("background", colorSelect)
}
