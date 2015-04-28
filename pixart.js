// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)
var form = document.querySelector("form")
var button = document.querySelector("#set-color")
var brush = document.querySelector(".brush")
var colorField = document.querySelector("#color-field")

form.addEventListener("submit", function( event ){
    event.preventDefault();

    brush.style.backgroundColor = colorField.value
})

//Using JavaScript, create 20 divs of the "square" class and append them to the body

for(i=0; i<21;i++) {
    var square = document.createElement('div')
    square.className = "square"

    document.body.appendChild(square)
}

//Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.

var squares = document.querySelectorAll(".square")

  for(i=0; i<21;i++) {

    squares[i].addEventListener("click", function (event) {
      //event.preventDefault();
      this.style.backgroundColor = colorField.value
    })
}
