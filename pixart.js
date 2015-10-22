$(document).ready(function() {

  $("div.brush").css("background","red");
  $("#set-color").on("click", function(){
    event.preventDefault();
    $("div.brush").css("background","green");
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
