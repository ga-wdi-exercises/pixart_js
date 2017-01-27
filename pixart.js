var setColor = $('#set-color')

setColor.on("click", function(){
  $(".brush").css('background', document.getElementById('color-field').value)
})

$("#set-color").click(function(event){
  event.preventDefault();
});


for (var i = 0; i < 8000; i++) {
  $('body').append('<div class="square"></div>');
}


var square = $('.square')

square.on("mouseover", function(){
  $(this).css('background', document.getElementById('color-field').value);

})
