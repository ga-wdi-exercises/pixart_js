function createDivSquares() {
  for (i=1;i<21;i++) {
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

var divToGreen = function() {
  $(this).css("background", "green")
}

function stopReload(evt) {
        evt.preventDefault();
}

button.on('click', updateColor)

newDivs.on('click', divToGreen)
