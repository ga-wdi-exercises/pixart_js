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

//when each $('.square') is clicked, change color to $(#color-field).val

$(".square").on("click", function(){
  $(this).css("background-color", $("#color-field").val())
})
//Uncaught TypeError: this.each is not a function
//this.each is from the minified jquery CDN???
