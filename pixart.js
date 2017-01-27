// Commit 1-2
$('#set-color').on('click',function(event){
  event.preventDefault();
  var color = $("#color-field").val();
  $(".brush").css("background", color);
});

// Commit 3
for(i=0;i<20;i++){
  $('body').append('<div class="square"></div>');
}

// Commit 4
$('.square').on('click',function(event){
  event.preventDefault();
  $(this).css("background","green");
});
