$(document).ready(function() {



  // set the swatch color to the value of input
  $("#set-color").on("click", function(){
    event.preventDefault();
    // set a variable equal to the input value
    var input = $("#color-field").val();
    // set swatch to input
    $("div.brush").css("background",input);
  });



});




// Events
// $(document).ready(function(){
//  $(".awesome").on("click",function(){
//   console.log("awesome div was clicked);
//  })
// })
//
//
//
// $(document).ready(function(){
//  
//$(".awesome").eq(0).children().each(function(index){
//    $(this).on("click",function(){
//      $(this).html("bob")
//    })
//  })
//
// })
//
// Can cycle through using .each(function(index){code}
// $(document).ready(function(){
//  $(".awesome").eq(0).children().each(function(index){
//    $(this).addClass("peachpuff")
//    $(this).html(index)
//  })
// })
//
