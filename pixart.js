$('#form').on('click', function(evnt){
  evnt.preventDefault();
  var color = $('#color-field').val();
  $('.brush').css('background', color);
})

for (let i = 0; i < 20; i++){
  $('body').append("<div class='square'></div>")
}
