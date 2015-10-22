$(document).ready(function(){
  $("#set-color").click(function(event){
    event.preventDefault()
       $(".brush").css("background-color",$("input").val())
  });
});

$(document).ready(function(){
  for(i = 0; i < 20; i++){
  $("#new-squares").append("<div class='square'></div>")
  }
});
