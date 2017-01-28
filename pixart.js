

$("document").ready(function() {

 function changeColor(e) {
   e.preventDefault();
   var userColor = $("#color-field").val();
   $(".brush").css("background", userColor);
 }


$("button").on({"click": changeColor});

for(i=0; i <= 8000; i++) {
$("body").append('<div class="square"></div>');
};

$(".square").on("mouseover", function() {
   var userColor = $("#color-field").val();
   $(this).css("background", userColor);

})


});
