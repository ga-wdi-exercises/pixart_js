let button = $('#set-color');
let inputSubmit = $('input');
let brushBox1 = $('.first');
let brushBox2 = $('.second');
let brushBox3 = $('.third');
let htmlBody = $('body');
let canvasDiv = fillArray('<div class="square"></div>', 10000);
let brushColor = undefined;
let colorList = [];

htmlBody.append(canvasDiv);

$(".square").on("mouseover ", function () {
  $(this).css("background", brushColor);
});


function fillArray(value, len) {
  var a = [value];
  while (a.length * 2 <= len) a = a.concat(a);
  if (a.length < len) a = a.concat(a.slice(0, len - a.length));
  return a;
}

function changeColor() {
  brushColor = $('#color-field').val();
  colorList.unshift($('#color-field').val());
  setSwatches();
}

function setSwatches() {
  brushBox1.css("background", colorList[0]);
  brushBox2.css("background", colorList[1]);
  brushBox3.css("background", colorList[2]);
}
function clickColor() {
  brushColor = $(this).css("background-color");
  colorList.unshift(brushColor);
  setSwatches();
}

button.click(changeColor);
inputSubmit.keydown(function(e) {
  if (e.which === 13) {
    e.preventDefault();
    changeColor();
  }
});

brushBox2.click(clickColor);
brushBox3.click(clickColor);
