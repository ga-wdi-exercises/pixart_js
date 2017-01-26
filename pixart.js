$(document).ready(function() {


let obj = {selColor: "1B4370", pastThreeColors: ["1B4370","1B4370","1B4370"]};
let numPixel = 8000;

for (let i=0;i<3;i++) {
  $(".controls").append("<div class='swatch'></div>");
}

for (let i=0;i<numPixel;i++) {
  $("body").append("<div class='square'></div>");
}

$('form').on('submit', function(e){
    e.preventDefault();
    var input = $('input').eq(0).val();
    $(".brush").css("background-color",input);
    obj.selColor = input;
    obj.pastThreeColors.pop();
    obj.pastThreeColors.unshift(input);
    for (let i = 0; i <3; i++) {
        $(".swatch").eq(i).css( "background-color", obj.pastThreeColors[i] );
    }
});

$(".square").on("mouseover", function() {
  $(this).css("background-color",obj.selColor);
});

$(".swatch").on("click", function() {
  $(".brush").css("background-color",$(this).css("background-color"));
  obj.selColor =  $(this).css("background-color");
});


});
