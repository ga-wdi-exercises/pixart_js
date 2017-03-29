$(document).ready(function(){

  var setColorButton = $('#set-color');

  var changeColorFunction = function(){
    event.preventDefault();
    console.log('clicked');
  };

  setColorButton.on('click', changeColorFunction);
});
