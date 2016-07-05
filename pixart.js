$(document).on("ready", function() {
    console.log("WORKING!");
})

var colorInput = $("#color-field");
var form = $("#form");
var brush = $(".brush");
form.on("submit", function(form) {
//Because it's a form with an input, you are acutally "clicking" submit. Use submit!
//Submit works for both "clicking" and pressing enter.
form.preventDefault();
brush.css("background", colorInput.val());
})

var i=0;
while(i<8000) {
  var square = "<div class='square'> </div>"
  $("body").append(square);
  i++;
}

$(".square").on("mouseover", function() {
$(this).css("background", colorInput.val());
})
