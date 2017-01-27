var setColor = $('#set-color')

setColor.on("click", function(){
  $(".brush").css('background', document.getElementById('color-field').value)
})

$("#set-color").click(function(event){
  event.preventDefault();
});
