$(document).ready(function() {
  var button = $('button');

  button.on("click", setColor);


  //need to prevent the reloading default

  function setColor(event) {
    event.preventDefault() //event automatically passed?
    var inputColor = $("#color-field").val();
    $(".brush").css('background-color', inputColor);
  }

});

  // $("#set-color").click(function(event) {
  // event.preventDefault();
  // var inputColor = $('#color-field').val();
  // console.log(inputColor);  //sets properly
  // $(".brush").css({background-color: inputColor});
  // })
