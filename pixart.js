console.log('hello world')
 //When I click the "Set Color" button, it should
 //change the color of the "brush" box to the color
 //I specify in the input field

var button = $("button");
//var input = $('#color-field').attr('input')
  function clickEvent(event) {
    $(".brush").css("background", $('input').val());// change to use input value
    event.preventDefault();
  }

button.on("click", clickEvent);
