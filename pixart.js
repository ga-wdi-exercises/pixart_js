
$("form").submit(function(event){
  event.preventDefault();
  $(".brush").css("background",$("#color-field").val());
});

output = "";
for (var i = 0; i<20 ; i++){
  board += '<div class = "square"> </div>'
}
document.getElementsByTagName("body")[0].innerHTML = output;
$("body").mouseover(function(){



});
