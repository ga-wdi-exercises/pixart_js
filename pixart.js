$('#set-color').on('click',function(event){
  event.preventDefault();
  var color = $("#color-field").val();
  $(".brush").css("background", color);
});
