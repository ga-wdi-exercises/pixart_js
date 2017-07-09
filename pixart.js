
var button = $('#set-color')
function handleClickEvent (e) {
  $('.brush').css ('background', $('input').val())
  e.preventDefault();
}
button.on ('click', handleClickEvent)
