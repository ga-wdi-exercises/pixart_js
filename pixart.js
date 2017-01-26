$( document ).ready(function() {

console.log("hello jquery")


var swatchColors = [];
var color;

$("#set-color").on("click", changeColor);
$("#set-color").keyup(changeColor);

$("#erase").on("click", function(){
  event.preventDefault();
  color = "#E7E5DB";
});

$(".swatch").on("click", function(){
  color=$(this).css("background-color");
}
);

function changeColor() {
        event.preventDefault();
        color = $("input").val();

        if (color !==""){
          $(".brush").css("background-color", color);
          $("input").val("");
          swatchColors.unshift(color);
          $("#swatchOne").css("background-color", swatchColors[0]);
          $("#swatchTwo").css("background-color", swatchColors[1]);
          $("#swatchThree").css("background-color", swatchColors[2]);
          // console.log(swatchColors);
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


// function swatch(){
//   swatchColors.unshift(color);
//   $("#brushOne").css("background-color", swatchColors[0]);
//   $("#brushTwo").css("background-color", swatchColors[1]);
//   $("#brushThree").css("background-color", swatchColors[2]);
//   console.log(swatchColors);

  // insert code here so that:
  // color = value of specific div background-color
// };

});
