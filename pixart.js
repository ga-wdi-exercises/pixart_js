var button = document.getElementById("set-color");
var brush = document.getElementsByClassName("brush")[0];
var body = document.getElementsByTagName("body")[0];

for (var i = 0; i < 8000; i++){
  $( "body" ).append( "<div class='square'></div>");
}

body.addEventListener("mouseover", function(e){
  if (e.target !== e.currentTarget && e.target.className == "square"){
        e.target.style.background = window.getComputedStyle(brush).backgroundColor;
  }
  e.stopPropagation(); //Was worried that this would interfere with tbe event listener on the button but it doesn't
  }
);


button.addEventListener("click", changeColor);

function changeColor(){ //Why don't I need to pass event as an argument?
  event.preventDefault();
  var color = $("#color-field").val();
  $("#color-field").val("");
  console.log(color);
  $(".brush").css("background", color);
}
