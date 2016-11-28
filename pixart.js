
var colors = ['red','yellow','blue'];
var set_palette = function(){
  $('.brush1').css('background',colors[colors.length-1]);
  $('.brush2').css('background',colors[colors.length-2]);
  $('.brush3').css('background',colors[colors.length-3]);
};
  set_palette();
var changeColor = function(){
  event.preventDefault();
  newColor = $('#color-field').val();
  colors.push(newColor);
  console.log(colors);
  color = colors[colors.length-1];
  console.log('color is now: ' + color);
  set_palette();
}

$('#set-color').on('click',changeColor);

$('.palette div').on('click',function(){
  newColor = $(this).css('background');
  console.log ('new color = ' + newColor);
  colors.push(newColor);
  console.log(colors);
})

$('#set-color').keypress(function(e){
  if(e.which == 13){
    changeColor;
  }
})
for(i=1; i<8000; i++){
  $('body').append('<div class="square"></div>');
}

$('body .square').mouseover(function(){
  $(this).css('background',colors[colors.length-1]);
  console.log(color);
});
