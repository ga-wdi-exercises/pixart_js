
$("form").submit(function(event){
  event.preventDefault();
  $(".brush").css("background",$("#color-field").val());
});

output = "";
for (var i = 0; i<8000 ; i++){
  output += '<div class = "square"> </div>'
}
document.getElementById("brush").innerHTML = output;
$(".brush").mouseover(function(event){
  if(event.target.classList.contains("square")){
    $(event.target).css("background",$("#color-field").val())
  }
});
