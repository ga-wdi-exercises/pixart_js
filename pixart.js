
var colorBox = $(".brush");
//var input = $("input").val();
var button = $("button");

var updateColor = function(e) {
  e.preventDefault();
  colorBox.css("background", $("input").val())
}


function stopReload(evt) {
        evt.preventDefault();
}
button.on('click', updateColor)
