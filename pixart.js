$("#set-color").on("click",function(pd){
  var color = $("#color-field").val();
  $(".brush").css("background", color);
  pd.preventDefault();
});

//enter key already works from inside the input field

function createDivs () {
  for ( i = 0; i < 8000; i++) {
    var div = $("<div></div>").addClass("square");
    $("body").append(div);
  }
  $(".square").on("mouseover", function() {
    var color = $("#color-field").val();
    $(this).css("background", color);
  });
}
createDivs();
