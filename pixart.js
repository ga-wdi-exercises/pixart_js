$( document ).ready(function() {
  console.log("hello jquery")

$("#set-color").on("click", changeColor);
$("#set-color").keyup(changeColor);
$("#erase").on("click", eraseColor);
$(".swatch").on("click", swatchColor);

var swatch = [];
var color;

function changeColor() {
        event.preventDefault();
        color = $("input").val();

        if (color !==""){
          $(".brush").css("background-color", color);
          $("input").val("");
          // push color value into swatch array and change div background-color in a loop
          }
        else {
          alert("Please submit a valid response.");
        }
      };

for (var i = 0; i< 8000; i++){
$("<div>",{"class":"square"}).appendTo("body").on("mouseover", pixelColor);
};

function pixelColor() {
  $(this).css("background-color", color);
};

function eraseColor() {
  event.preventDefault();
  color= "#E7E5DB";
};

function swatchColor(){
  // insert code here so that:
  // color = value of specific div background-color
};

});
