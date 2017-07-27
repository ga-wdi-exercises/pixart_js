
var form =$("#form")

var button =$("#set-color")

var brush =$(".brush")

var input =$("#color-field")



form.on("submit", function (call) {

  call.preventDefault()

  brush.css('background-color', input.val())

})
for (var i = 0; i < 5000; i++) {

  var box = $("<div class='square'/>")

  $("body").append(box)

}

$(".square").on("mouseover", function () {

  $(this).css('background', input.val())

})
