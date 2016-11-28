
$( document ).ready(function() {
    // console.log( "ready!" );

  let inputRed = 1;
  let inputGreen = 2;
  let inputBlue = 3;
  let redGreenBlue;

  console.log(inputRed + " " + inputGreen + " " + inputBlue);

  let paintMe = "rgb("+inputRed+","+inputGreen+","+inputBlue+")";
  console.log(paintMe);


//// GET INPUT FROM FORM
$('form').on('submit', function( evt ){
  // evt.preventDefault();
  inputRed = $('input').eq(0).val();
  inputGreen = $('input').eq(1).val();
    console.log(inputGreen);

  inputBlue = $('input').eq(2).val();
    console.log(inputBlue);
evt.preventDefault();

inputRed = fixInput(inputRed);
inputGreen = fixInput(inputGreen);
inputBlue = fixInput(inputBlue);

paintMe = "rgb("+inputRed+","+inputGreen+","+inputBlue+")";
console.log(paintMe);

return(inputRed, inputGreen, inputBlue);
});

/////// FIX THE INPUT AND MAKE IT A HEX NUMBER
fixInput = function(input){
  console.log("the number passed in is "+ input );
  if (input < 255){
    if (input.length != 3){
      if (input.length != 2 ){
        input = "00" + input;
      }
      else{
        input = "0" + input;
      }
    };
  } else {
    input = "255";
  }
  console.log("the fixed number is " + input);
  return(input);
};


let square = function square(){
  $('.controls').append('<div class="brush"></div>');
  $('.brush').on('mouseover', function(/* */){
  $(this).css('background', paintMe);
  });
};
//////places the square onto the board
for (let i = 0; i < 1000; i++){
  square();
}
op
});///END OF DOCUMENT READY
