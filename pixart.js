
var button = document.querySelector("#set-color");
var brush = document.querySelector(".brush");
var field = document.querySelector("#color-field");
var form = document.querySelector("#form");


button.addEventListener("click", function(event){
  event.preventDefault();
  // console.log(brush.style.background)

  brush.style.background = field.value
  // console.log(brush.style.background)

})


// <form id="form">
//   <input type="text" id="color-field"></input>
//   <button id="set-color">Set Color</button>
// </form>
