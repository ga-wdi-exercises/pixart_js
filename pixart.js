$(document).ready(function() {
  var button = $("#set-color");
  var brush = $(".brush");
  var input = $("input");

  console.log(button);

  button.on("click", setColorButton);
  //doSomething() - invoking a function
  //doSomething is a reference

  function setColorButton() {
    brush.css("background-color", input.val());
    event.preventDefault();

for (i = 0; i < 8000; i++){
  $("body").append("<div class='square'></div>");
  }


$("button").click(function(){
    $("p").css("color", "red");
});

$(".square").on("mouseover", function() {
  $(this).css("background", $("#color-field").va());

});
}
});
