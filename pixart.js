var clickID = 0;
$(document).ready(function(){
    $("button").on("click", (function(){
      clickID++;
      event.preventDefault();
      var colorID = $("input:text").val();
      if(colorID === " " || colorID === ""){
        alert("Please choose a CSS color!");
      }
      else{
        alert("This is your color: " + colorID);
        $(".brush").css("background", colorID);
      }
      $("form").on("click", (function(){
        $(".brush").css("background-color", colorID);
      }));
  }));

});
