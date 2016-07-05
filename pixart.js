$(document).on("ready", function(){
  // console.log("jquery");
  var field = $("#color-field")
  var button = $("#set-color");
  var brushBox = $(".brush");

  button.on("click", setColor);

  function setColor(e){
    e.preventDefault();
    console.log("clicked");
    brushBox.css("background", field.val());
  }

});
