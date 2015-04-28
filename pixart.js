
// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)

var form = document.querySelector("#form")
var field = document.querySelector("#color-field")
var button = document.querySelector("#set-color")
var brush = document.querySelector(".brush")

button.addEventListener("click", function (event){
  event.preventDefault();
  console.log(brush.style.background)

  brush.style.background = field.value
  console.log(brush.style.background)


})

// Using JavaScript, create 20 divs of the "square" class and append them to the body

for (var i = 0; i <8000; i ++){
  var div = document.createElement("div")
  div.setAttribute("class","square")
  document.body.appendChild(div)
}


// Add functionality so that when I click on each "square", it changes the color of that individual square to "green"

// for (var i = 0; i <20; i ++){
//   document.querySelectorAll(".square")[i].addEventListener("click", function (event){
//   event.preventDefault();
//   this.style.background = "green"
//   })
// }


// Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.

for (var i = 0; i <8000; i ++){
  document.querySelectorAll(".square")[i].addEventListener("mouseover", function (event){
  event.preventDefault();
  this.style.background = field.value
  })
}

// Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
// Modify your code so that you are creating 8000 divs instead of 20.
// Change the event that changes your box colors from 'click' to 'mouseover'
// Paint a picture!

// var squares = document.querySelectorAll(".square")
// console.log("squares " + squares)
//
// for (i in squares){
//   index = parseInt(i)
//   console.log(i)
//   console.log("square[i] " + squares[0])
//
//   console.log(index)
//   console.log("square[i] " + squares[i])
//
//   squares[i].addEventListener("click", function (event){
//     event.preventDefault();
//     console.log("square.style.background " + squares[index].style.background)
//     squares[i].style.background = "green"
//     console.log("square.style.background " + squares[index].style.background)
//
//   })
//
//
//
// }
// square.addEventListener("click", function (event){
//   event.preventDefault();
//   console.log("square.style.background " + square.style.background)
//   square.style.background = "green"
//   console.log("square.style.background " + square.style.background)
//
// })


// <form id="form">
//   <input type="text" id="color-field"></input>
//   <button id="set-color">Set Color</button>
// </form>
// <div class="brush"></div>

// .brush {
//   width: 100px;
//   height: 100px;
//   background: #1B4370;
//   margin: 15px auto;
// }
