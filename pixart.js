// var userColor;
// var getColor = function(varX){
//   $(varX).css("background", userColor);
// };

$(document).ready(function(){
  //don't reload the page
  event.preventDefault();

  //What color do you want
  var userColor;
  var userColorChoose = function(){
    userColor = $("#color-field").val();
    event.preventDefault();
  };
  //put this color in the box
  var getColor = function(varX){
    $(varX).css("background", userColor);
    event.preventDefault();
  };

  //get the color on button click
  $("button").on("click", function(){
    userColorChoose();
    getColor(".brush");
  });
  //setting container div
    // $(".controls").after("<div></div>");
    // $("div:eq(2)").attr("id","squareBlock");

  for(i=0; i<20; i++){
      $(".controls").after("<div></div>");
      $("div:eq(2)").attr("class","square");
      $("div:eq(2)").on("click", getColor("div:eq(2)"));
  }



// var canvasRows = 5;
// var canvasColumns = 4;
// //Columns
//   for(i=0; i<canvasColumns; i++){
//     $("#squareBlock").after("<div></div>");
//     $("div:eq(3)").attr("id",(i+"Column"));
//     $("div:eq(3)").attr("class","square");
//     //Rows
//     for(j=0; j<canvasRows; j++){
//       $(".square:eq(0)").append("<div></div>");
//       $(".square:eq(0)").children().eq(j).attr("id",i+"Column"+j+"Row");
//       $(".square:eq(0)").children().eq(j).attr("class","squareCell");
//       $(".square:eq(0)").children().eq(j).css("float", "left");
//       $(".square:eq(0)").children().eq(j).css("width","10px");
//       $(".square:eq(0)").children().eq(j).css("height", "10px");
//       $(".square:eq(0)").children().eq(j).css("background","white");
//       var placer = $(".square:eq(0)").children().eq(j);
//       placer.on("click", getColor(placer));
//     }
//   }
  //appending to container div

  // $(".square").appendTo("#squareBlock");
  // $("#squareBlock").css("margin","auto");
  // $("#squareBlock").css("width","500");



  // $(".squareCell").on("click", function () {
  //   // userColorChoose();
  //   $(".squareCell").css("background",userColor);
  // });




  // for(i=0; i<canvasColumns; i++){
  //   for(j=0; j<canvasRows; j++){
  //     $("#"+i+"Column"+j+"Row").on("click",function(){
  //       userColorChoose();
  //       $("#"+i+"Column"+j+"Row").css("background", userColor);
  //       event.preventDefault();
  //     })
  //   }
  // }

  // // I don't know if I need this?
  // $("body")[0].addEventListener("click", function(){
  //   console.log("hello");
  //   event.preventDefault();
  // }
  // );




});
