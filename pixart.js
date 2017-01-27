function createDivSquares() {
  for (i=1;i<8001;i++) {
    $("body").append('<div class="square"></div>')
  }
}
createDivSquares();

var colorBox = $(".brush");
var button = $("button");
var newDivs = $("body div.square")

var updateColor = function(e) {
  e.preventDefault();
  colorBox.css("background", $("input").val())
}

var divToBrush = function() {
  $(this).css("background", $("input").val())
}

function stopReload(evt) {
        evt.preventDefault();
}

button.on('click', updateColor)

newDivs.on('mouseover', divToBrush)
