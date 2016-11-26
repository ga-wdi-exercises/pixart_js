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
  // Clears the input field after submit
};

getColor.on("click", setBrushColor);
//-------------------------------------------------
const controlsDiv = $('.controls');

// Create 20 new divs in body after control div
for (let i = 0; i < 20; i++) {
  // Add div after the control div
  controlsDiv.after('<div class="square"></div>');
}
//-------------------------------------------------
const squareDiv = $('.square');
// Add background color green to clicked on div
const setSquareColor = function () {
  // Change background color to color-field input
  $(this).css("background", colorInput.val());
  colorInput.val('');
};

squareDiv.on("click", setSquareColor);
//-------------------------------------------------
