//add 2 more brushes
$(".brush").attr("class", "brush 1");
$(".controls").append("<div class='brush 2'></div>");
$(".controls").append("<div class='brush 3'></div>");

//change $(".brush").css("background-color") to $("#color-field").val() on click of $("#set-color")

// $("#set-color").on("click", function(e){
//   e.preventDefault();
//   $(".brush").css("background-color", $("#color-field").val())
// })

var clickCount = 0;

$("#set-color").on("click", function(e){
  e.preventDefault();
  $(".brush").eq(clickCount).css("background-color", $("#color-field").val());
  if (clickCount < 2) {
    clickCount++
  }

  else {
    clickCount = 0
  }
})


//append 8000 of <div class = "square"></div> to body
for (var i = 0; i <= 8000; i++) {
  $("body").append("<div class = 'square'></div>")
}

//when each $('.square') is mouseover-ed, change color to $(#color-field).val
$(".square").on("mouseover", function(){
  $(this).css("background-color", $("#color-field").val())
})
