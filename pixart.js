var setColor = $("#form")

setColor.on("submit", function(event){
  event.preventDefault()
  $(".brush").css("background", $("#color-field").val())
  })

var div = "<div class='square'></div>"
for (i = 0; i <= 20; i++) {
  $("body").append(div)
}

// square.on("click", function(){



// console.log(
// $("#color-field").val()
// )
// })
