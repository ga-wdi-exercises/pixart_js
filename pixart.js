$(document).ready(function() {
  $("#set-color").click(function(event) {
    event.preventDefault();
    let brushColor = $("#color-field").val();
    $(".brush").css('background', brushColor);
  });

  for(var i = 0; i <= 20; i++){
    let html = `<div class="square"></div>`;
    $("body").append(html);
  }
  
});
