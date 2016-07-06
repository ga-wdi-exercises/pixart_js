+$(document).ready(function() {
 +

 +$("button").on("click", colorBrush);
 +
 +  function colorBrush() {
 +    $(".brush").css("background", $("input").val());
 +    event.preventDefault();
 +  }
 +
 +});
