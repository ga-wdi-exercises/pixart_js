

//1
   $("button").click(function(event){ //gets button and sets function when clicked
     $(".brush").css("background" , "pink") //gets brush and sets background color
     event.preventDefault() //stops the blue default from showing
   })

//2
$("input[type='text']").keyup(function(){
  $(".brush").css("background" , "pink") //gets same background when enter is pushed in the input section
})

//3
//create div tag put the class in the tag and then append to body / loop however many times
var createDiv = function() {
  for(var i=0; i<100; i++){
var div = document.createElement("div");

// $(this).css("width", "50px");
$("body").append("<div class = 'square'></div>");
}
  }
  createDiv(); //call the function variable 

$(".square").css({
  "width": "10px" ,   "height": "10px" , "margin" : "0px auto"//added auto to center it

});


//4

  $(".square").hover(function(){
      $(this).css("background-color", "purple") //when you hover on class square the color changes (I don't like green)

  });


//5
