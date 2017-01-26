//commit 1 & 2

$('button').on('click', function (){

var inputValue = $('#color-field').val();
  $('.brush').css('background', inputValue)

return false
})
//commit 3
for(var i = 0; i <=20; i++){
$('body').append("<div class='square'></div>")
}
