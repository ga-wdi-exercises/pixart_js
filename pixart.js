var form = document.getElementById('form');
var input = $("#color-field");
var brush = $(".brush");
var button = document.getElementById('set-color');

var hello = function() {
  event.preventDefault();
  document.style.backgroundColor = 'red';
  };

button.addEventListener("click", hello);
