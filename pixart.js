var input = $("#color-field");
var button = $("#set-color");
var brush = $(".brush");
var form = $("#form");
var body = $("body");
var color;

var y = function(){
  $(this).css("background",color);
}

var z = function(){
  brush.css("background",color);
  for (var i = 0; i < 20; i++) {
    newSquare = $("<div class='square'></div>");
    newSquare.on("click",y);
    body.append(newSquare);
  }
}

var x = function(){
  color = input.val();
  z();
}

form.submit(function(e) {
    e.preventDefault();
});

button.on("click",x);
