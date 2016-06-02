$("#set-color").on("click", function(evt){
  evt.preventDefault();
  var input = $("#color-field");
  console.log(input.val());
  $(".brush").css("background-color" , input.val());
  $(".square").on("mouseover",function(){
    $(this).css('background-color',input.val())
  })
})
