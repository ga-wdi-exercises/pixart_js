
let $form = $(form);
let $brush = $(brush);

let $setColor = $(setColor);

var button = document.querySelector('button');
var brush = document.querySelector('.brush');
//this will keep form from refreshing on click
$("setColor").on(function(form){
  return false;
});
var colorField = document.getElementById('#colorField');
button.addEventListener('click', function() {
  document.body.div.eq[1] = 'colorField';
});



 /*
 $(".brush").click(function (){
     $(this).css("background-color", "red")
 });
*/



// $( ".brush" ).change(function() {
//     $('#colorField').css('background-color', '#colorField');
//     console.log("brush changed");
// });
