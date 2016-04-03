$("#set-color").on("click", function(){
  event.preventDefault();
  $(".brush").css("backgroundColor", $("#color-field").val());
  console.log("heya")
})
