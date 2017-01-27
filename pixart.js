$('#set-color').on('click',function(event){
  event.preventDefault();
  var color = $("#color-field").val();
  $(".brush").css("background", color);
});

for(i=0;i<20;i++){
  $('body').append('<div class="square"></div>');
}
