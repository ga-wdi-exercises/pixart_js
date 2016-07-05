$(document).ready(function() {
  console.log("hewwo?!")

  var button = $('button');
  button.on("click", changeColorBox);
  button.on("keypress", changeColorBox);

});

function changeColorBox(evt) {
  //Define input within the function to avoid 'input' isn't defined error
  var input = $('input');

  evt.preventDefault();
  //.val() is for input fields
  var color = input.val();
  console.log(color);

  $(".brush").css("background", color);
}
