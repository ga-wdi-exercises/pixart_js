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
  var div = $("body").append($("<div class='square'/>"))
};

('body').classList.add('square')
div.on('mouseover', function() {
$(this).css("backgroundColor", brush.css("backgroundColor")
  )})


});
