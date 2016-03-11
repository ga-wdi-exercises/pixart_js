$("#set-color").click(function (evt) {
evt.preventDefault()
var color = $("#color-field").val()
$(".brush").css("background-color", color)
$(".square").css("background-color", color)

var mouseX = 0, mouseY = 0;
var $xp = 0, $yp = 0;

$(document).mousemove(function(paint){
       $mouseX = paint.pageX;
       $mouseY = paint.pageY;

    var $loop = setInterval(function(){
      $xp += (($mouseX - $xp)/5);
      $yp += (($mouseY - $yp)/5);
      $(".square").css({left:$xp +'px', top:$yp +'px'});
    }, 60);
  });
});



for (var i =0; i < 20; i++) {
var div = $("<div class=square></div>")
console.log(div)
$("body").append(div)
};

var square = $(".square")
