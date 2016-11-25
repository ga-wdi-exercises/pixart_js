// setColor equal to submit button
const getColor = $('#set-color');
// colorInput equal to input field
const colorInput = $('#color-field');

// Change the color of the brush box
const setBrushColor = function (e){
  // Prevents the page from refreshing
  e.preventDefault();
  let brushColor = $('.brush');
  brushColor.css("background", colorInput.val());
};

getColor.on("click", setBrushColor);
