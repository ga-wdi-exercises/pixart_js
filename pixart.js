 $( document ).ready( function(){
   $("#set-color").on("click", function(){
      event.preventDefault();
     $(".brush").css("background-color", "#FFFFFF").bind();
  });
});
