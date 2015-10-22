$( document ).ready(function() {
    console.log( "ready!" );
    $('#set-color').click(function(){
    var getColor = $( "input" ).val();
    event.preventDefault();
    $(".brush").css("background-color", getColor);
    
  });
});
