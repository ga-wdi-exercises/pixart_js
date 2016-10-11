$(document).ready(function() {
  var button = $('button');
  var textField =  $("#color-field");
  console.log(textField);

  button.on("click", setColor);
  textField.on('keyPress', setColorKeyboard);



  function setColorKeyboard(event) {
    event.preventDefault();
    key = event.which();
    if (key === 13) {
      var inputColor = textField.val();
      $(".brush").css('background-color', inputColor);
    }
  }

  function setColor(event) {
    event.preventDefault() //event automatically passed?
    var inputColor = textField.val();
    $(".brush").css('background-color', inputColor);
  }

});

  //  i just want to remember this wasnt the way.
  // $("#set-color").click(function(event) {
  // event.preventDefault();
  // var inputColor = $('#color-field').val();
  // console.log(inputColor);  //sets properly
  // $(".brush").css({background-color: inputColor});
  // })
