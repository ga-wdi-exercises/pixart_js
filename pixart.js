var button = $('button');
var brushBox = $('.brush');
var inputField = $('#color-field');


/*this has both onClick and enter functionality in chrome for some reason if it doesn't work for the other browsers I'd create my own call back function starting with the function in line seven and feed that into the button.on selector listening for both click and enter*/
$(document).ready(function() {
    button.on({
        click: mainColorEvent,
        onKeyDown: mainColorEvent,
    })

    function mainColorEvent(event) {
        event.preventDefault();
        function changeColor(){
            brushBox.css('background-color', inputField.val());
        }
        changeColor();
    };
});
