$("document").ready(function(){
  var brushInput;
//add event listener to button
  $("#set-color").on("click", function(evt){
    //prevent default reload on button
    evt.preventDefault();
    //debug comment
    console.log("clicked");
    //get value of text input field and assign it to brush
    brushInput = $("#color-field").val();
    $(".brush").css("background", brushInput);

  })

  // $("color-field").on("keydown", function(evt){
  //   if (evt.which == 13) {
  //     evt.preventDefault();
  //     var brushInput = $("#color-field").val();
  //     $(".brush").css("background", brushInput);
  //   }
  //   evt.preventDefault();
  //   console.log("keydown")
  // })

  //create 20 boxes and add to .body
  for (i = 0; i < 8000; i++) {
      var pixSquare = "<div class='square'></div>"
      $("body").append(pixSquare);
  }
})

  //create event listener on body

  function changeSquare(evt) {
    var target = $(evt.target);
    if (target.is($(".square"))){
      $(evt.target).css("background", $(".brush").css("background"))
    }
  }

  $("body").on("mouseover", changeSquare)

//  $("body").on("mousedrag", changeSquare)
/*{
    console.log("clicked");
    changeSquare();
  }*/


  /*$("body").on("mouseover", changeSquare)/*function(evt){
    console.log("mousingover");
    var target = $(evt.target);
    if (target.is($(".square"))){
      $(evt.target).css("background", $(".brush").css("background"))
    }
  })*/
