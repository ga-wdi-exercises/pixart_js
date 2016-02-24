var button = document.getElementById("set-color");
var userInput = document.getElementById("color-field");

var brush = document.querySelector("brush");

var setColor = function(){
  button.addEventListener("click", function(event){
    event.preventDefault(); //googled this - not sure exactly what it is doing still.
    brush.style.background = UserInput.value;
  });
};
//*============

//skipping ahead. not sure.

var moreDivs = function(){
  for(i=0; i<8000; i++){
      moreDivs = document.createElement("div");
        moreDivs.setAttribute("class","sqare");
        document.body.appendChild(moreDivs);
        moreDivs.addEventListener("mouseover") // must figure out the rest. still not sure about how this works.)

}}
moreDivs();
setColor();
