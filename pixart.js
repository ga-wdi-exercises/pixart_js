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
