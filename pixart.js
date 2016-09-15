
$("#set-color").click(function(event){
event.preventDefault();
var color = $("input").val()
$(".brush").css("background", color)

})

//The .val() method returns or sets the value attribute of the selected elements.

//The .preventDefault() method cancels the event if it is cancelable,
//meaning that the default action that belongs to the event will not occur.
