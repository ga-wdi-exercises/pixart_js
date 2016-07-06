
$(document).on("ready", function() {
    console.log('Ready');

    $('button').on("click", userInput);

 function userInput(event) {
   event.preventDefault();
   var setColor = $('#color-field').val();
   $('.brush').css("background-color", setColor);
 }

 });
