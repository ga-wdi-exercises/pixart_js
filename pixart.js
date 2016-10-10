var Button = $("#set-color");

 Button.on("click", changeRed);

function changeRed() {
 $(".brush").css("background", $("input").val());
 event.preventDefault();
}
//Enter key works automatically - commit #2
