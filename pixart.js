
$(document).ready(function(){
  console.log("hello world")
})
var button = $("#set-color");
var textInput = $("#color-field");

button.on('click', function (event) {
    event.preventDefault();
    console.log("in click handler");
    color = textInput.val();
    $(".brush").css("background",color);

});
