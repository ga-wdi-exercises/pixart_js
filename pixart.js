var button = $('button');
var brushBox = $('.brush');
var inputField = $('#color-field');


$(document).ready(function() {
    button.on('click', function(event) {
        event.preventDefault();
        function changeColor(){
            brushBox.css('background-color', inputField.val());
        }
        changeColor();
    });
});
