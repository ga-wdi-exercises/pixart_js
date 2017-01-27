//This is to change the color of the brush field
var button = $('button');
var brush = $('.brush').css('background');



button.on('click', function(e){
  e.preventDefault()
  $('.brush').css('background', brush);
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

for (var i=0; i < 8000; i++){
    var div = `<div class='square'></div>`;
    $('body').append(div);
}


//attempt to change the color of the divs
$('.square').on('mouseover', function(){
  console.log("clicked");
  $(this).css('background',brush);
})


// change box to 10px h&w and marin 0;
// loop 8000
// change from click to mouseover

$('.square').attr('height','10px');
$('.square').attr('widtht','10px');
$('.square').attr('margin',0);
