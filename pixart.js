$( document ).ready(function() {
    console.log( "ready!" );
    $('#set-color').click(function(){
    var getColor = $( "input" ).val();
    event.preventDefault();
    $(".brush").css("background-color", getColor);
  });
});

function addingDivs(){
	for (var i=0; i<8000; i++) {
    $("body").append('<div class="square" style = "width:100px; height:200px; margin:0"></div>');
    }
}
addingDivs();

$('.square').mouseover(function(){
    $(this).css('background', $( "input" ).val());
});
