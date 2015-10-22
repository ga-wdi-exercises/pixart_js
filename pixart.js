// assign color entered in input field to brush
$( document ).ready( function () {
$("button").on('click',function(event){
    event.preventDefault();
    var colorSet = $('#color-field').val();
    $('.brush').css('background-color',colorSet);
  });
})
