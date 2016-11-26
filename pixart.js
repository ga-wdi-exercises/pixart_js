let form = $("#form");
let button = $("#set-color");
let brush = $(".brush");
let input = $("#color-field");


form.on("submit", function(event){
  event.preventDefault();
  brush.css('background-color', input.val());
})
