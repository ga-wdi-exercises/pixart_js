var setColor = $("#set-color")

setColor.on("click", function(event){
  event.preventDefault()
  $(".brush").css("background", $("#color-field").val())

// console.log(
// $("#color-field").val()
// )
})
