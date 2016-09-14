var input = $("#color-field");
var button = $("#set-color");
var brush = $(".brush");
var form = $("#form");
var body = $("body");

var x = function(){
  color = input.val();
  brush.css("background",color);
  for (var i = 0; i < 20; i++) {
    newSquare = $("<div class='square'></div>");
    body.append(newSquare);
  }
}

form.submit(function(e) {
    e.preventDefault();
});

button.on("click",x);
