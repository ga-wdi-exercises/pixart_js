
$(document).ready(function(){

  $("#set-color").on("click",function(){
    function setColor(){
        event.preventDefault()
      $(".brush").css("background-color", colorField.val());
      }

  })

});
