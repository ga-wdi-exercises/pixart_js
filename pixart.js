// // variables for paint brush colors
// var form = document.querySelection("form").value;
// var input = document.querySelection("color-field").value;
// var brush = document.querySelection(".brush").value;
//
//
// // instructions for changing color
// form.addEventListener("click", function("event") {
//       event.preventDefault();
//       brush.style.backgroundColor = newColor.value;
// });


+$("#form")[0].addEventListener("submit",function(pizza) {
 +  event.preventDefault()
 //???
 +$(".brush").css("background",$("#color-field").val())
 +});
 +
 +for( var i = 0; i < 5000; i++ ){
 +  $("body").append($("<div class='square'/>"))
 +};
 +//mostly unchanged
 +document.body.addEventListener("mouseover", function(event) {
 +  if(event.target.classList.contains("square")) {
 +    $(event.target).css("background",$("#color-field").val())
 +  };
 +});
 
