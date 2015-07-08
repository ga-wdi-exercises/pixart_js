
//var input = $("#color-field")

$("form").on("submit", function(){
  console.log("working");
  event.preventDefault();
  $(".brush").css("background-color", $("#color-field").val())
  })
