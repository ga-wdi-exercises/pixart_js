
$("form").on("submit", function(){
  console.log("working");
  event.preventDefault();
  $(".brush").css("background-color", $("#color-field").val())
  })

// Create 20 divs of the "square" class and append them to the body
for (var i = 0; i < 20; i++){
  $("body").append('<div class="square"></div>')}
