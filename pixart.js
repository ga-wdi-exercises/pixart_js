var input = $("#color-field");
var button = $("#set-color");
var brush = $(".brush");
var form = $("#form");

var x = function(){
  color = input.val();
  brush.css("background",color);
}

form.submit(function(e) {
    e.preventDefault();
});

button.on("click",x);
