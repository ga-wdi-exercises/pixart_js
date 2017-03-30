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
var container = "";
var square = $('div.square');

function setColor(){
    brushHue=input.val();
    brush.css("background", brushHue);
}

function changeBackground(){
  // newSquare="green";
  $('div.square').css("background", "green");
}

$('#set-color').click(setColor)
$('#set-color').keydown(setColor)
$('<div>').click(changeBackground)

// $('.square').on(‘click’, function() {
// 			$(this).css(“background”, “red”)
// 			})

for (var x = 0; x <= 100; x++){
    container += '<div class="controls">';
    for (var y = 0; y <= 100; y++){
        container += '<div class="square"></div>';
    }
    container += '</div>';
}
$('.controls').append(container);

$('#set-color').click(function(event) {
  event.preventDefault();
});







// .bind(box)
