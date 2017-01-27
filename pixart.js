//commit 1 & 2

$('button').on('click', function (){

var inputValue = $('#color-field').val();
  $('.brush').css('background', inputValue)

return false
})
//commit 3 & 6
for(var i = 0; i <=8000; i++){
$('body').append("<div class='square'></div>")
}

//commit 4 & 5 & 6

$('.square').on('mouseover', function(){
var inputValue = $('#color-field').val();
    $(this).css('background', inputValue);

})
