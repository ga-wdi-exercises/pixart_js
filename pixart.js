$("#set-color").on("click",function(pd){
  var color = $("#color-field").val();
  $(".brush").css("background", color);
  pd.preventDefault();
});

//enter key already works from inside the input field

for ( i=0; i <= 20; i++) {
  var div = $("<div></div>").addClass("square");
  $("body").append(div);
}
