$("#set-color")[0].addEventListener("click", function(){
  event.preventDefault();
  $(".brush").css("background-color", $("#color-field").val());
})
