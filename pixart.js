// commit 3 function
function clickSquare(){
      $(this).css("background", "green");
    }

function chooseMyC(){
  var matchC=$('#color-field').val();
  $(this).css("background", matchC);
}
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

// commit 3
var squareNode=$('div.square');
squareNode.click(clickSquare);

//commit 4
squareNode.click(chooseMyC);
