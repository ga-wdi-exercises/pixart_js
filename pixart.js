var colorButton = document.getElementById("set-color");
var colorField = document.getElementById("color-field");
var brush = document.querySelector(".brush");

colorButton.addEventListener("click", function(event){
  event.preventDefault();
  brush.style.background = colorField.value;
});

colorField.addEventListener("keypress", function(event){
  if (event.keyCode === 13){
    brush.style.background = colorField.value;
  }
});

var divs = [];

for (i = 0; i < 8000; i++){
  var div = document.createElement('div');
  div.setAttribute("class", "square");
  document.body.appendChild(div);
  divs.push(div);
};

console.log(divs);

for (i = 0; i < divs.length; i++){
  divs[i].addEventListener("mouseover", function(event){
    this.style.background = colorField.value;
  });
};
