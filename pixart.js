//This is to change the color of the brush field
var button = $('button');
var input = $('#color-field');

button.on('click', function(e){
  e.preventDefault()
  $('.brush').css('background', input.val());
});
// allows for enter key to submit form
$("input").keypress(function(e) {
    if (e.keypress == 13) {
        e.preventDefault();
        $("form").submit();
    }
});

// appends divs to body tags
var square = $('.square');

for (let i=0; i < 8000; i ++){
    var div = $('<div />').appendTo('body');
     div.attr('class','square').click(function(){
       $(div).css('background', 'green');
     });
}
// .click(function(){
// $(div).on('click').css('background','green');

//attempt to change the color of the divs
$('.square').on('mouseover', function(){
  console.log("clicked");
})


// change box to 10px h&w and marin 0;
// loop 8000
// change from click to mouseover

$('.square').attr('height','10px');
$('.square').attr('widtht','10px');
$('.square').attr('margin',0);
