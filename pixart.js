
 var inputColor = $("#color-field");
 var button = $("#set-color");
 var brush = $(".brush");
 var form = $("#form");
 var body = $("body");

 var y = function(){
   $(this).css("background", "green");
 }

 var x = function(){
   color = inputColor.val();
   brush.css("background", color)
 }
form.submit(function(e) {
  e.preventDefault();
});

button.on("click", x);

for (var i = 0; i < 20; i++) {
  newSquare = $("<div class = 'square', <<div></div>")
  newSquare.on("click", y)
  body.append(newSquare);
}
