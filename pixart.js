//Get set color button
$("#set-color");
//When change color selected... it should change to whatever is in input field

//setup event listener for click button
$("#set-color").on('click' , function(t){
//When you click the set color button what do you want it to do
t.preventDefault();
//set value of the input field...
 var clickToChangeColors = $("input").val();
 //Take the brush and change it's background to whatever theseColors input is
 $(".brush").css("background", clickToChangeColors);
});


// same thing should happen upon hitting enter
$("input").keypress(function(event){
  //event.preventDefault();
  var enterbuttonChange = $("input").val();
$(".brush").css("background", enterbuttonChange);
});

//create 20 divs
for (var i = 0; i < 21; i++) {
  //addClass to Divs
  $("body").append($("<div></div>").addClass('square') );
 }
//add event listener for square
$(".square").on('click', function(){
//Do something

var enterbuttonChange = $("input").val();
$(".square").css("background", enterbuttonChange);
});
