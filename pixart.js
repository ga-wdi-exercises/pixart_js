$("#set-color").on("click", function(event){
        event.preventDefault()
        $(".brush").css("background-color", $("#color-field").val())
});
for(var i = 0; i < 8000; i++ ){
    $("body").append("<div class='square'></div>")
};
$(".square").each(function(){
      $(this).on("mouseover", function() {
          $(this).css("background-color", $("#color-field").val())
        })
});
