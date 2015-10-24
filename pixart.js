$(document).ready(createCanvas);

function createCanvas () {
  // Create pixels contained within the div .canvas
  for (var i = 0; i < 20; i++) {
    $('.canvas').append("<div class=\"pixel\" id=\""+i+"pixel\"></div>");
  }
  // Click set color button to change the current color to the color input.
  $('#setColor').on('click', function(evt) {
    evt.preventDefault();
    var newColor = $('#colorInput').val()
    $('#brushColor').css('background', newColor);
  });
}



//run function changeColor on click of .square
//   $('.square').on('click', function () {
//     this.css("background", "green");
// });
// }

// var canvas = {
//   changeColor: function {
//     $('.square').on('click', function() {
//     this.
//   });
// }

// function changeColor() {
//   newColor = $('.brush').css('background');
//   $('.square').css('background', newColor);
// }

// function changeColor() {
//   newColor = $('.brush').css('background');
//   $('.square').css('background', newColor);
// }



/************************************************
ORIGINAL
************************************************/

// $(document).ready(createCanvas);
//
// function createCanvas () {
//   // create variables
//   colorName = $('#color-field');
//   colorSet = $('#set-color');
//   brushBox = $('.brush');
//   // create canvas
//   for (var i = 0; i < 20; i++) {
//     canvasSquare = document.createElement('div');
//     canvasSquare.className = "square";
//     $('body').append(canvasSquare);
//   }
//   // click set color to change the current color to the input color
//   colorSet.on("click", function(evt) {
//     evt.preventDefault();
//     brushBox.css("background", colorName.val());
//   });
// }
//   //run function changeColor on click of .square
// //   $('.square').on('click', function () {
// //     this.css("background", "green");
// // });
// // }
//
// // var canvas = {
// //   changeColor: function {
// //     $('.square').on('click', function() {
// //     this.
// //   });
// // }
//
// // function changeColor() {
// //   newColor = $('.brush').css('background');
// //   $('.square').css('background', newColor);
// // }
//
// // function changeColor() {
// //   newColor = $('.brush').css('background');
// //   $('.square').css('background', newColor);
// // }
