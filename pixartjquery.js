$(document).on("ready", function(){
  var form = $("#form")
  var brush = $(".brush")
  var input = $("#color-field")
  var button = $("#set-color")

$("#form").on("submit", function(){
  event.preventDefault();
  console.log("happy")
  brush.css("backgroundColor", input.val());
});


for(x = 0; x < 10000; x++) {
  var div = $("<div>", {class: "square"});
  $("body").append(div);

};

$(".square").on('mouseover', function() {
$(this).css("backgroundColor", input.val());
})
});
