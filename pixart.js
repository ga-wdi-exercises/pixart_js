//enter text

//var textColor = document.getElementByID("color-field");
var brush = document.getElementsByClassName(".brush");

//click button and apply change of event to click.

var button = document.querySelector("button");
var handleClickEvent = function() {
  document.getElementsByClassName(div.brush).background = textColor;
};
button.addEventListener("click", handleClickEvent);

///Create 20 divs

var createDivs = function() {
  for (var i = 0; i < 20; i ++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "square");
    document.body.appendChild(newDiv);
  }
};

createDivs();
