// Commit 1-2
$('#set-color').on('click',function(event){
  event.preventDefault();
  var color = $("#color-field").val();
  $(".brush").css("background", color);
});

// Commit 3
// for(i=0;i<20;i++){
//   $('body').append('<div class="square"></div>');
// }

// Commit 4
// $('.square').on('click',function(event){
//   event.preventDefault();
//   $(this).css("background","green");
// });

// Commit 5
// $('.square').on('click',function(event){
//   event.preventDefault();
//   var color = $("#color-field").val();
//   $(this).css("background",color);
// });

// Commit 6
$(".square").css({'margin':'0', 'width':'10', 'height':'10'});
for(i=0;i<8000;i++){
  $('body').append('<div class="square"></div>');
}
$('.square').on('mouseover',function(event){
  event.preventDefault();
  var color = $("#color-field").val();
  $(this).css("background",color);
});
