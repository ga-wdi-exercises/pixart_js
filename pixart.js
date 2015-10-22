//change $(".brush").css("background-color") to $("#color-field").val() on click of $("#set-color")
$("#set-color").on("click", function(e){
  e.preventDefault();
  // console.log("click"); -- for testing
  $(".brush").css("background-color", $("#color-field").val())
})

//append 8000 of <div class = "square"></div> to body
for (var i = 0; i <= 8000; i++) {
  $("body").append("<div class = 'square'></div>")
}

//when each $('.square') is mouseover-ed, change color to $(#color-field).val
$(".square").on("mouseover", function(){
  $(this).css("background-color", $("#color-field").val())
})
