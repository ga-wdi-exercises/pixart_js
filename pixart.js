var button = $("#set-color");
var input = $("#color-field");
var swatch = []
var color;
var swatch0 = $(".brush").eq(0)
var swatch1 = $(".brush").eq(1)
var swatch2 = $(".brush").eq(2)

var newColor = function(evt){
  evt.preventDefault();
  color = $("#color-field").val();
  // $(".brush").css("background-color",color);
  swatch.unshift(color);
  $(".brush").eq(0).css("background-color",swatch[0]);
  $(".brush").eq(1).css("background-color",swatch[1]);
  $(".brush").eq(2).css("background-color",swatch[2]);
}

button.on("click", newColor);

//Why does this for loop work????
// for(var i = 0; i < 3; i++) {
//   $(".brush").eq(i).on("click", function() {
//     color = swatch[i];
//   })
// }

// swatch0.on("click", function() {
//   color = swatch[0]
// })
// swatch1.on("click", function() {
//   color = swatch[1]
// })
// swatch2.on("click", function() {
//   color = swatch[2]
// })

$(".brush").on("click", function() {
  color = this.style["background-color"];
})

input.keypress(function (evt) {
  var key = evt.which;
  if(key === 13) {
    var color = $("#color-field").val();
    $(".brush").css("background-color",color);
  }
})

for(var i = 1; i <+ 8000; i++){
  var newDiv = $("<div/>", {"class": "square"});
  newDiv.css({"width": "10px"})
  newDiv.mouseover( function() {
    // color = $("#color-field").val();
    $(this).css("background-color", color)
  });
  $("body").append(newDiv);
}

$(".brush").css("display","inline-block")



// swatch2.on("click", function() {
//   var color2 = swatch[1]
//   newDiv.mouseover( function() {
//     $(this).css("background-color", color1)
//   });
// })
