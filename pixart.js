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
  for (var i = 0; i<20; i++) {
    var div = document.createElement("div");
    div.innerText = "test";
    $("body").append(div);
    $(div).attr("class","square");
}
});



// Commit 3
//
// Create 20 divs of the "square" class and append them to the body
// Hint: use .append()
// Commit 4
//
// Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
// Hint: either add the event listener while creating the squares, or listen for events on the body element
// Commit 5
//
// Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.
// Commit 6
//
// Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
// Modify your code so that you are creating 8000 divs instead of 20.
// Change the event that changes your box colors from 'click' to 'mouseover'
// Paint a picture!





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
