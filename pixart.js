
$("button").on("click", function(event){
 // console.log(this);
 event.preventDefault();
 var userColorChoice = $("input").val();
 // alert(userColorChoice);
 $(".brush").css("background-color", userColorChoice);
});

// DRAFTS  
//event listener. "this" refers to what was clicked
//refers to the first div only

// $ ("set-color").
// document.getElementbyID("set-color").background-color()

// $("set-color").on("click",function(){
//   document.body.style.backgroundColor = "lemonchiffon";
// )};

// $("set-color").click.function(){
//  $("brush").attr(backgroundColor, "");
// )}
// var fireButton = $("set-color").val();

// $(document).ready( function(){
  // alert(fireButton);
  // var userColorChoice = $("color-field").val();
  // var getBrush = $("brush")

//   $("set-color")("click",function() {
//     alert("did this work?");
//   // $(".brush").append("input");
//   // $("input").val("");
// });
//
// $(".awesome").each(function(){
// $(this).html("change this text");
// });
//for loop
