var setColor = $('button');


setColor.on('click',function(){
  event.preventDefault();
  var colorBlock = document.getElementById('color-field').value;
  $('.brush').css("background",colorBlock);
});
