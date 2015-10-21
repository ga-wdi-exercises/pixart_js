//commit 1
function updateC(evt)
{
 evt.preventDefault();
 var matchC=$('#color-field').val();
  $('div.brush').css("background", matchC);
}
var buttonNode=$('#set-color');
buttonNode.click( updateC);

//commit 2
for(var i=0; i<20; i++){
  $('body').append('<div class="square"> </div>');
}
