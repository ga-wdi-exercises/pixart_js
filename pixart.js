
$(document).ready(function(){
    $("button").on("click", function(){
      var color = $("#color-field").val();
      console.log(color);
      $(".brush").css("background",color);
      event.preventDefault();
    })
});
