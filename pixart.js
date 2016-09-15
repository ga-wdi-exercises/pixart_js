
$('#set-color').on('click', function(event){
var color = $('input').val()
$('.brush').css('background', color)
event.preventDefault();
})
