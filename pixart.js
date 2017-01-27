var setColor = $('button');


setColor.on('click',function(){
  event.preventDefault();
  var colorSelected = $('#color-feild').value;
  $('brush').css("background",colorSelected);
});
