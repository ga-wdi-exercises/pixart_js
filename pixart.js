var button = $("#set-color");
var input = $("#color-field");

var newColor = function(evt){
  evt.preventDefault();
  var color = $("#color-field").val();
  $(".brush").css("background-color",color);
}

button.on("click", newColor);

input.keypress(function (evt) {
  var key = evt.which;
  if(key === 13) {
    var color = $("#color-field").val();
    $(".brush").css("background-color",color);
  }
})

for(var i = 1; i <+ 20; i++){
  var newDiv = $("<div/>", {"class": "square"});
  newDiv.on("click", function() {
    color = $("#color-field").val();
    $(this).css("background-color", color)
  });
  $("body").append(newDiv);
}
