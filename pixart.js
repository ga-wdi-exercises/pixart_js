var setColor = $('button');

//add also able to press enter along with clicking set color
//button
setColor.on('click',function(){
  event.preventDefault();
  var colorBlock = document.getElementById('color-field').value;
  $('.brush').css("background",colorBlock);
});

function createDiv(){
  for (var i = 0; i < 20; i++){
    var div = $('<div class="square"></div>');
    $('body').append(div);
  }
}

createDiv(20);
