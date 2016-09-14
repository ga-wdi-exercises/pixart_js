var input = $("#color-field");
var button = $("#set-color");
var brush = $(".brush");
var form = $("#form");
var body = $("body");
var squares = $(".square");
var color;

var y = function(){
  $(this).css("background",color);
}

var z = function(){
  brush.css("background",color);
  for (var i = 0; i < 8000; i++) {
    newSquare = $("<div class='square'></div>");
    newSquare.on("mouseover",y);
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

squares.css("margin","0").css("height","10px").css("width","10px");
