// <div class="controls">
//   <form id="form">
//     <input type="text" id="color-field"></input>
//     <button id="set-color">Set Color</button>
//   </form>
//   <div class="brush"></div>
// </div>

var colorField = document.querySelector("#color-field");
var button = document.querySelector("#set-color");
var brush = document.querySelector(".brush");


button.addEventListener("click", "keypress", function(event){
  // stop the button from doing its default action
  // OR prevent it from doing its normal action

  //get color from the colorField
  // and assign it as the color on the brush
  event.preventDefault();
  var color = colorField.value;
  console.log(color);
  brush.style.backgroundColor  = color;

});

for(i=0; i<20;i++) {
    var square = $("<div class = 'square'/> ");
    $("body").append(square);
}
//
//     document.getElementById('board').appendChild(board);
// }


// function createSquares(num) {
//   for (i = 0; i <= num; i++) {
//  div = document.createElement("div");
//  document.body.appendChild(div);
//  div.className = "square";
//  div.addEventListener("click", changeColor);
//  }}
