$(document).ready(function(){
  $("#set-color").click(function(event){
    event.preventDefault()
       $(".brush").css("background-color",$("input").val())
  });
});

$(document).ready(function(){
  for(i = 0; i < 8000; i++){
  $("#new-squares").append("<div class='square'></div>")
  }
});

// $(document).ready(function(){
//   $(".square").click(function(event){
//     $(this).css("background-color",'green')
//   });
// });

$(document).ready(function(){
  $(".square").mouseover(function(event){
    $(this).css("background-color",$("input").val())
  });
});
