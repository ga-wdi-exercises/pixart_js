// assign color entered in input field to brush
$( document ).ready( function () {
$("button").on('click'||'13.keycode',function(event){
    event.preventDefault();
    var colorSet = $('#color-field').val();
    $('.brush').css('background-color',colorSet);
  });
})
