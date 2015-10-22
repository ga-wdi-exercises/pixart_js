

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
  for(var i=0; i<20; i++){
var div = document.createElement("div");

// $(this).css("width", "50px");
$("body").append("<div class = 'square'></div>");
}
  }
  createDiv();

$(".square").css({
  width: "10px"
  // margin: "0"
})

$(".square").css({
  margin: "0px"
})



  // $("div").each(function(){
  //   document.querySelector(".square").style.width="50px"
  //     document.querySelector(".square").style.margin="0px"
  // });
// });

// $(function lotsOfDivs() {
//   $("div").width(10)
//   $("div").css({'margin':'0px'});
  // $(this).addClass("square");
  // $.appendTo(document.body)('<div class= "square"></div>')
// })
// for(i=0; i<20; i++){
// var lotsOfDivs = document.createElement("div");
// lotsOfDivs.className = "square"
// document.body.appendChild(lotsOfDivs)
// }
// lotsOfDivs.style.width = 10px;
// lotsOfDivs.style.margin = 0px;

//4
// function changeColor(){
//   $("div").on("click", function(){
//     $(".square").css("background" , "green")
//   })
// }


//5
