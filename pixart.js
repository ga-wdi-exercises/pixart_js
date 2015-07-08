
$("form").on("submit", function(){
  console.log("working");
  event.preventDefault();
  $(".brush").css("background-color", $("#color-field").val())
  })

// Create 20 divs of the "square" class and append them to the body
for (var i = 0; i < 8000; i++){
  $("body").append('<div class="square"></div>');
  }
$(".square").on("mouseover", function(){
  $(this).css('background-color' , 'green')}
  )


//* Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
// **Hint**: either add the event listener while creating the squares, or listen for events on the `body` element
