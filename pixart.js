var input = document.getElementById("form");
var button = $("button");
var brushBox = $("div").eq(1);
var value = null;

button.addEventListener("submit", function(event){
    event.preventDefault;
    brushBox.style.background = input.value;
    })
//code doesn't work. I get an uncaught type error - button.listener isn't a function
