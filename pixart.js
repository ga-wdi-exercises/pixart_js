$(document).ready(function(){

  $("button").on("click", function(e){
    e.preventDefault();
    var color = $("input").val()
    $(".brush").css("background", color);
  })

  $("#color-field").on("keyup", function(e){
    if(e.keyCode === 13){
      console.log("Enter")
      e.preventDefault();
      var color = $("input").val()
      $(".brush").css("background", color);
    }
  })
for(i=2; i<=21; i++){
  $("body").append("<div></div>");
  $("div").eq(i).attr("class", "square")
}
})
