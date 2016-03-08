$("#set-color").click(function (evt) {
  evt.preventDefault()
  var color = $("#color-field").val()
console.log("clicked");
$(".brush").css("background-color", color)
})

for (var i =0; i < 20; i++) {
var div = $("<div class=square></div>")
console.log(div)
$("body").append(div)
}


// var brush = $(".brush");
// var setColor=$("#set-color");
// var colorField=$("#color-field");
// var colors = ["#00ffff", "#ffff00", "#ff00ff", "#00ff00", "#700a99", "ff007f", "#0000ff" ];
// var form = $("#form");
//
//
// //create divs for square color
// var square = '<div class="square"></div>' +  '<div class="square"></div>' +
//              '<div class="square"></div>' + '<div class="square"></div>' +
//              '<div class="square"></div>' + '<div class="square"></div>' +
//              '<div class="square"></div>' + '<div class="square"></div>' +
//              '<div class="square"></div>' + '<div class="square"></div>' +
//              '<div class="square"></div>' + '<div class="square"></div>' +
//              '<div class="square"></div>' + '<div class="square"></div>' +
//              '<div class="square"></div>' + '<div class="square"></div>' +
//              '<div class="square"></div>' + '<div class="square"></div>' +
//              '<div class="square"></div>' + '<div class="square"></div>' ;
//
// $("body").append(square);
//
// function changeColor (){
//   $(".square").click(function () {
//   this.css("background-color", "green")}
//   )};
//
// $.each(square, changeColor)
//
//
//
//
// document.getElementById("form").addEventListener("click", function(event){
//     event.preventDefault()
//
// });

// brush.click(function () {
// brush.css("background-color", random())
// })
