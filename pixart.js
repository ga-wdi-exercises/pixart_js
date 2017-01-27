var setColor = $('button');

//add also able to press enter along with clicking set color
//button
//setColor.on('click',function(){
function setColor(){
  event.preventDefault();
  var colorBlock = document.getElementById('color-field').value;
  $('.brush').css("background",colorBlock);
}

setColor.on('click', setColor);


function createDiv(){
  for (var i = 0; i < 4000; i++){
    var div = $('<div class="square"></div>');
    $('body').append(div);


    $('.square').on('mouseover', onClick);
  }
}

createDiv(4000);

function onClick(){
  var inputColor = document.getElementById("color-field").value;
  $(this).css("background", inputColor);
}




//messed up on commit -4 was supposed to be 5
