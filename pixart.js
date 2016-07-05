$(document).on("ready", function(){
  // console.log("jquery");
  var field = $("#color-field")
  var button = $("#set-color");
  var brushBox = $(".brush");

  button.on("click", setColor);
  $("#form").on("submit", setColor);

  function setColor(e){
    e.preventDefault();
    // console.log("clicked");
    brushBox.css("background", field.val());
  }

  var divHtml = '<div class="square"></div>';
  for (var i = 0; i < 20; i++) {
    $("body").append(divHtml);
  }

  var divs = $("div.square");
  divs.on("click", setToBrush);

  function setToBrush(){
    $(this).css("background", "green");
  }

});
