/*Commit 1

* When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)
* Use jQuery to select the element, and `addEventListener` to handle clicks
  * `$("body")[0].addEventListener...`



*/

//variables
var setColorButton= document.getElementById("set-color")
var color;
var colorFieldBox= $("#text").html()
var brush=  document.getElementsByClassName("brush");

//-et color inserted and submitted in input field
var colorInput= setColorButton.addEventListener("submit",function(){
  $("#text").html()
      console.log("yeaa");

})

//change color of square to color in the input field
  $(".square").css("background", "colorInput");

//Create 20 divs of the "square" class and append them to the body

var div= "squares"
var i=document.createElement("div");
              for(var i = 0; div < 20; i++){
                  document.body.appendChild(div[i]);
                  i.className="squares";

$("body").append(div);
}
