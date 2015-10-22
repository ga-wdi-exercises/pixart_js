$( document ).ready(function() {
    console.log( "ready!" );
    $('#set-color').click(function(){
    var getColor = $( "input" ).val();
    event.preventDefault();
    $(".brush").css("background-color", getColor);
  });
});

function addingDivs(){
	for (var i=0; i<20; i++) {
    $("body").append('<div class="square"></div>');
    }
}
addingDivs();

$('.square').click(function(){
    $(this).css('background', 'green');
});

$('.square').click(function(){
  $(".square").css("background-color", $( "input" ).val());
});
