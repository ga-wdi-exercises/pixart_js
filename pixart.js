//Name: Josue Rosales
//Date: July 9th
//Description: drawing when mouseover

var inputText= $('#color-field'); //grabbing input text element
var button  = $('#set-color'); // grabbing button element
var currentBrush  = $('.brush');

button.on('click',changeBrush)



function changeBrush(event)
{
  var colorx = inputText.val();
  currentBrush.css('background',colorx);

  event.preventDefault();//prevents from refreshing
}



var oneSquare = ('<div class="square"> </div>');
for(var i =0; i<8000; i ++)
{
  $('body').append(oneSquare);
}


$('.square').on('mouseover',changetoGreen)

function changetoGreen(event)
{
  var colorx = inputText.val();
  $(this).css('background',colorx)
  event.preventDefault();
}
