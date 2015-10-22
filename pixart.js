$(document).ready(function() {



  // set the swatch color to the value of input
  $("#set-color").on("click", function(){
    event.preventDefault();
    // set a variable equal to the input value
    var input = $("#color-field").val();
    // set swatch to input
    $("div.brush").css("background",input);
  });

  // create 20 divs of the "square" class and append to body
  for (var i = 0; i<8000; i++) {
    var div = document.createElement("div");
    $("body").append(div);
    $(div).attr("class","square");
}

  // on "square" clicks, change the color of div to input value
  $("div.square").on("mouseover", function (){
    var input = $("#color-field").val();
    $(this).css("background", input);
  });


});


// Commit 6
//
// Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
// Modify your code so that you are creating 8000 divs instead of 20.
// Change the event that changes your box colors from 'click' to 'mouseover'






//$(".awesome").eq(0).children().each(function(index){
//    $(this).on("click",function(){
//      $(this).html("bob")
//    })
//  })


// Can cycle through using .each(function(index){code}
// $(document).ready(function(){
//  $(".awesome").eq(0).children().each(function(index){
//    $(this).addClass("peachpuff")
//    $(this).html(index)
//  })
// })
