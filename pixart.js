var setColorButton = $('#set-color');
var inputSelector = $('#color-field');
var swathDiv = $('.brush');
var drawColor=null;

swathDiv.on('click',function(){
  drawColor=$(this).css('backgroundColor');
});

var cycle = 0;
var arr = $('.brush');
setColorButton.on('click', function(evt){
  evt.preventDefault();
  arr.eq(cycle).css('backgroundColor',inputSelector.val());
  cycle++;
  if (cycle===4){
    cycle=0;
  }
});

for(var a=0;a<8000;a++){
  $('body').append("<div class='square'></div>");
}

$('.square').on('mouseover',function(evt){
  $(this).css('background', drawColor || swathDiv.css('backgroundColor'));
});
