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
$("input").keypress(function(){
  var enterChangeColor = $("input").val();
  $(".brush").css("background", enterChangeColor);
});
