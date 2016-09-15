
$("#set-color").click(function(event){
event.preventDefault();
var color = $("input").val()
$(".brush").css("background", color)

})
//The .val() method returns or sets the value attribute of the selected elements.
//The .preventDefault() method cancels the event if it is cancelable,
//meaning that the default action that belongs to the event will not occur.


for (i = 1; i <= 20; i++) {
  var newDiv = $("<div class = square></div");
  $("body").append(newDiv)
};
//The .append() method inserts specified content at the end of the selected elements.


$( ".square" ).on( "click", function() {
  $(this).css("background", "green")
  });
//$(this) selector refers or stands for the current selected object in a loop or event.
//For example, if you have an unordered list <ul> with five list items <li> inside and you run a click event for each list item,
//when you click on a single item,  $(this) selector will refer exactly to that clicked item.
