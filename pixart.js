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

  // stop the button from doing its default action
  // OR prevent it from doing its normal action

  //get color from the colorField
  // and assign it as the color on the brush
  button.addEventListener("click", function(event){
  event.preventDefault();
  var color = colorField.value;
  console.log(color);
  brush.style.backgroundColor  = color;
});

//Code to get a div boxes
//Create 20 divs of the "square" class and append them to the body
function createSquare() {
for(i=0; i<5000;i++) {
    square = document.createElement("div");
    document.body.appendChild(square);
    square.className = "square";
    //code to paint div boxes green when i click them.
    // * Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
    //   * **Hint**: either add the event listener while creating the squares, or listen for events on the `body` element
    square.addEventListener("click",  function (evt){
    evt.target.style.backgroundColor = brush.style.backgroundColor;
  });
}
}
createSquare();

// ###Commit 5
//
// * Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.
