var setColor = $("#form")

setColor.on("submit", function(event){
  event.preventDefault()
  $(".brush").css("background", $("#color-field").val())
  })

for (i = 0; i <= 20; i++) {
  var div = "<div class='square'></div>"
  $("body").append(div)
}

$(".square").on("click", function(){
  $(this).css("background", "green")
})



// console.log(
// $("#color-field").val()
// )
// })
