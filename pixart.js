$(document).ready(function() {
    var button = $('button');
    var brushBox = $('.brush');
    var inputField = $('#color-field');
    var boxField = $('')
    /*this has both onClick and enter functionality in chrome for some reason if it     doesn't work for the other browsers I'd create my own call back function starting   with the function in line seven and feed that into the button.on selector listening for both click and enter*/
    button.on({
        click: colorSelect,
        onKeyDown: colorSelect,
    })
    // changes the selected color to the text input
    function colorSelect(event) {
        event.preventDefault();
        function changeColor(){
            brushBox.css('background-color', inputField.val());
        }
        changeColor();
    };
    //creates static div elements for the site with the onClick color change
    for(i=1;i<8000;i++){
      $("body").append($("<div class='square'/>"))
    }
    $('.square').on('mouseover',function(event) {
        event.preventDefault();
        $(this).css('background-color', inputField.val());
    });

});
