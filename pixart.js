/*var changeColor = function(){
  preventDefault();
  $('.brush').attr('background-color: '+ color);

};
var color = $('#color-field').HTML;

$('#set-color').on("click", changeColor);
$('#set-color').keypress("13", changeColor);

for(i=0;i<20;i++){
  new squarediv[i] = class Square{};
  $('body').append(squarediv[i]);
};

Square.changeColor = changeColor();
*/


let form = $("#form");
let button = $("#set-color");
 let brush = $(".brush");
let input = $("#color-field");


 form.on("submit", function(event){
   event.preventDefault();
   brush.css('background-color', input.val());
 })
  for(let i = 0; i < 8000; i++){
    let square = $("<div class='square'/>");
    $("body").append(square);
  }

   $(".square").on("mouseover", function(){
     $(this).css('background', input.val());
   })
