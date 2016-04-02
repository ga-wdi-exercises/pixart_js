var pBrush = $(".brush");
var form = $("form");
var newColor = $("#color-field");
var availableColors = ['#1B4370', '#1B4370', '#1B4370', '#1B4370'];

// create and append swatches
var swatch1 = $("<div></div>");
swatch1.addClass("swatch");
$("body").append(swatch1)
swatch1.click(cycleColorsSwatch)
var swatch2 = $("<div></div>");
swatch2.addClass("swatch");
$("body").append(swatch2);
swatch2.click(cycleColorsSwatch);
var swatch3 = $("<div></div>");
swatch3.addClass("swatch");
$("body").append(swatch3);
swatch3.click(cycleColorsSwatch);

// fix formatting
var line = $("<div></div>");
line.addClass("divider");
$("body").append(line);

//change colors
function cycleColors(event) {
  event.preventDefault();
  availableColors.unshift(newColor.val());
  availableColors.pop();
  refreshColors();
}

function cycleColorsSwatch(event) {
  event.preventDefault();
  newC = $(this).css('backgroundColor');
  availableColors.splice(availableColors.indexOf(newC), 1);
  availableColors.unshift(newC);
  refreshColors();
}

function refreshColors() {
  pBrush.css('backgroundColor', availableColors[0]);
  swatch1.css('backgroundColor', availableColors[1]);
  swatch2.css('backgroundColor', availableColors[2]);
  swatch3.css('backgroundColor', availableColors[3]);
}

form.submit(event, cycleColors);

//create paintable area
for (var i = 0; i < 8000; i ++){
  var div = $('<div></div>');
  div.addClass('square');
  $("body").append(div);
  div.mouseover(function() {
    $(this).css('backgroundColor', pBrush.css('backgroundColor'))
  })
}
