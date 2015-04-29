// * When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)
// * The same thing should happen when I press the enter key from inside the input field

var form = document.querySelector("#form")
var field = document.querySelector("#color-field")
form.addEventListener("submit", function(event){
  event.preventDefault();
  document.querySelector(".brush").style.background = field.value
})


// * Using JavaScript, create 20 divs of the "square" class and append them to the body
for(x = 0; x < 21; x++){
  var board = document.createElement('div');
  board.className = "square";
  document.querySelector("body").appendChild(board);
}
