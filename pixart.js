$( document ).ready(function() {
    $('#set-color').click(function(){
    var getColor = $( "input" ).val();
    event.preventDefault(); //cancels dafault event
    $(".brush").css("background-color", getColor); // this changes brush background as user input value
  });
});

function addingDivs(){
	for (var i=0; i<8000; i++) {
    $("body").append('<div class="square" style = "width:10px; height:20px; margin:0"></div>');
    }
}
addingDivs();

$('.square').mouseover(function(){
    $(this).css('background', $( "input" ).val());
});
