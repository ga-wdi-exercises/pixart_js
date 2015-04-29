var inputs = []
var color;


function changeBackground() {                                //this function changes the background color to whatever the user have entered

  event.preventDefault();

  color = document.getElementById("color-field").value;      // within the document, looks for element "color-field", and grabs it's value and save it to the variable "color"
  document.querySelector(".brush").style.backgroundColor = color;  //within the document, looks for the query ".brush" and styles the background color to the variable "color"
  console.log(inputs)
  // if (inputs.length === 3) {                                  // the commended code was scheduled to be used for the bonus
  //   inputs.shift();
  // };
  //
  // return inputs.push(color)
}



document.getElementById("set-color").addEventListener("click", changeBackground); //within the document, look for the element "set-color". add an event listener to listen for "click" and run the "changeBackground" funciton

for (i = 0; i < 8000; i++) {
  var square = document.createElement('div');             // this creates divs
  square.className ="square";                             // for each newly created div, give it the class properities of "square"
  square.addEventListener("mouseover", function(event){  //for each newly created div w/ the class properities of "square", run the function below
    this.style.backgroundColor = color                     //on this one "square", apply the "style" "backgroundColor" of color
  })
  document.body.appendChild(square);                        //within the document, looks in the body, apendeds to the bottom, and what it appends is square

}

 
