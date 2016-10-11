$( document ).ready(function() {
  console.log("hello jquery")

$("#set-color").on("click", changeColor);
$("#set-color").keyup(changeColor);

var color;

function changeColor() {
        event.preventDefault();
        color = $("input").val();
        if (color !==""){
          $(".brush").css("background-color", color);
          $("input").val("");
          }
        else {
          alert("Please submit a valid response.");
        }
      };

for (var i = 0; i< 20; i++){
$("<div>",{"class":"square"}).appendTo("body").on("click", pixelColor);
};

function pixelColor() {
  $(this).css("background-color", color);
};


});
