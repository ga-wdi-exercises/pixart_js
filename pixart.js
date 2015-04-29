var inputs = []
var color;


function changeBackground() {

  event.preventDefault();

  color = document.getElementById("color-field").value;
  document.querySelector(".brush").style.backgroundColor = color;
  console.log(inputs)
  if (inputs.length === 5) {
    inputs.pop();
  };

  return inputs.push(color)
}

document.getElementById("set-color").addEventListener("click", changeBackground);

for (i = 0; i < 8000; i++) {
  var square = document.createElement('div');             // this creates divs
  square.className ="square";                             // for each newly created div, give it the class properities of "square"
  square.addEventListener("mouseover", function(event){  //for each newly created div w/ the class properities of "square", run the function below
    this.style.backgroundColor = color                     //on this one "square", apply the "style" "backgroundColor" of color
  })
  document.body.appendChild(square);                        //add the square to the row of squares, which is the end of the file
}
