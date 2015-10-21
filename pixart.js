var changeColor = function () {
  var button = $("#set-color");
  button.on("click", function(evt) {
    evt.preventDefault();
    var input = $("#color-field").val()
    $(".brush").css("background-color",input);
  })
}

changeColor();

for(var i = 1; i <+ 20; i++){
  $("body").append("<div/>")
}
