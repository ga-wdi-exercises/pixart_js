
var colorBox = $(".brush");
var button = $("button");

var updateColor = function(e) {
  e.preventDefault();
  colorBox.css("background", $("input").val())
}

function createDivSquares() {
  for (i=1;i<21;i++) {
    $("body").append('<div class="square"></div>')
  }
}

function stopReload(evt) {
        evt.preventDefault();
}

button.on('click', updateColor)
