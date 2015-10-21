$(document).ready(function(){
    $("button").on("click", (function(){
      event.preventDefault();
      var colorID = $("input:text").val();
      if(colorID === " " || colorID === ""){
        alert("Please choose a CSS color!");
      }
      else{
        alert("This is your color: " + colorID);
        $(".brush").css("background", colorID);
      }
  }));
});
