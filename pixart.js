var Button = $("#set-color");

 Button.on("click", changeRed);

function changeRed() {
 $(".brush").css("background", $("input").val());
 event.preventDefault();
}
//Enter key works automatically - commit #2
var stopCounting = 20;
$(document).ready(function () {
  for (var i = 1; i <= stopCounting; i++) {
    $('body').append('<div class ="square"></div>');
  }
});
