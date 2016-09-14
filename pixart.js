var setColor = $('#set-color')


function changeColor(){
  var color = $('#color-field').val()
  $(".brush").css("background",color);
  event.preventDefault()
}

setColor.on("click",changeColor);

//.val
