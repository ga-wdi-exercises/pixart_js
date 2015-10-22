var setColorButton = $('#set-color');
var inputSelector = $('#color-field');
var swathDiv = $('.brush');
var box1 = $('#box1');
var box2 = $('#box2');
var box3 = $('#box3');
var box4 = $('#box4');
var drawColor=null;

swathDiv.on('click',function(){
  drawColor=$(this).css('backgroundColor');
  console.log($(this).css('backgroundColor'));
});

var cycle = 0;
var arr = $('.brush');
setColorButton.on('click', function(evt){
  evt.preventDefault();
  console.log('click');
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
  console.log('div clicked');
  console.log(evt.target);
  $(evt.target).css('background', drawColor|| swathDiv.css('backgroundColor'));
});
