$(document).ready(function(){
  $("#set-color").click(function(event){
    event.preventDefault()
       $(".brush").css("background-color",$("input").val())
  });
});
