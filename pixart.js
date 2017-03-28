let button = $('#set-color');
let inputSubmit = $('input');
let brushBox = $('.brush');

function changeColor() {
  let brushColor = $('#color-field').val();
  brushBox.css("background", brushColor);
}

button.click(changeColor);
inputSubmit.keydown(function(e) {
  if (e.which === 13) {
    e.preventDefault();
    changeColor();
  }
});
