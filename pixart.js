var button = $("button");
var form = $("form");
//var userColor = $("input:text").val();// Not sure why this variable doesn't work

$("form").submit(function(){
  event.preventDefault();
  $(".brush").css("background", $("input:text").val());
})
$("form").submit(function(event){
  event.preventDefault();
  console.log($("input:text").val());
    });
for(i = 0; i<=500; i++) {
  $("body").append("<div></div>");
  $("div").addClass("square");
  }
$("div").click(function(){$(this).css("background", $("input:text").val())})

//$("div").mouseover(function(){$(this).css("background", $("input:text").val())}) //Not sure why this function doesn't work
