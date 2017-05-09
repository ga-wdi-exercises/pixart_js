var setColor = $("#form")

setColor.on("submit", function(event){
  event.preventDefault()
  $(".brush").css("background", $("#color-field").val())

// console.log(
// $("#color-field").val()
// )
})
