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
