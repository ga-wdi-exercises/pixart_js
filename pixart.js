// var color = $(this.input);
//
// function setColor(){
//   $(".brush").css("background", $(this.input));
// }
//
// color.on('submit', setColor);
//
// var box {
//     this.brush:$(".brush"),
//     this.input:$("#color-field"),
// }
var input = $("#color-field");
var brush = $(".brush");
var brushHue = undefined;

function setColor(){
    brushHue=input.val();
    brush.css("background", brushHue);
}

$('#set-color').click(setColor)


$('#set-color').click(function(event) {
  event.preventDefault();
  $("<div>")
    .append("default " + event.type + " prevented")
    .appendTo("#log");
});




// .bind(box)
