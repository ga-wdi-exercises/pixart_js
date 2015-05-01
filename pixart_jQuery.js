$(document).ready(function(){

// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
$("form").on("submit", function(event){
    event.preventDefault();
    $(".brush").css({"background-color": $("#color-field").val()})
})

//Using JavaScript, create 20 divs of the "square" class and append them to the body
for(i=0; i<8000;i++)
$(document.body).append("<div class= 'square'></div>")

//Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.
var squares = document.querySelectorAll(".square")

//this changes the color of ALL the squares to the value color...need to figure out .each!!
$(".square").on("mouseover", function(event){
  $(this).css({"background-color": $("#color-field").val()})
})


})
