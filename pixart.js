var button = $("#set-color");
var changeColor = function () {
  button.on("click", function(evt) {
    evt.preventDefault();
    var input = $("#color-field").val()
    $(".brush").css("background-color",input);
  })
}

changeColor();
