//change $(".brush").css("background-color") to $("#color-field").val() on click of $("#set-color")
$("#set-color").on("click", function(e){
  e.preventDefault();
  // console.log("click"); -- for testing
  $(".brush").css("background-color", $("#color-field").val())
})

//append 20 of <div class = "square"></div> to body
for (var i = 0; i <= 20; i++) {
  $("body").append("<div class = 'square'></div>")
}

// for EACH $(".square"): change color set in $("#color-field") on click -- not change ALL squares

$(".square").on("click", function(){
  $(this).css("background-color", "green")
})
