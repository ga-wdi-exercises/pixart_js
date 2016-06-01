$("button").click(function(e){
  var brush = $(".brush");
  var color = $("#color-field").val();
  e.preventDefault();
  brush.css("background-color", color)
});
