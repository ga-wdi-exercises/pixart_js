var button = $("#set-color");
var input = $("#color-field");

var newColor = function(evt){
  evt.preventDefault();
  var color = $("#color-field").val();
  $(".brush").css("background-color",color);
}

button.on("click", newColor);

for(var i = 1; i <+ 20; i++){
  var newDiv = $("<div/>", {"class": "square"});
  newDiv.on("click", function() {
    $(this).css("background-color", "green")
  });
  $("body").append(newDiv);
}
