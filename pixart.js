$("#set-color").on("click",function(pd){
  var color = $("#color-field").val();
  $(".brush").css("background", color);
  pd.preventDefault();
});

//enter key already works from inside the input field
