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
  }

});
// $("button").click(function(){
//     $("p").css("color", "red");
// });
//
//
//
//
//

 
