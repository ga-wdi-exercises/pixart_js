$(document).ready(function(){
  console.log("I'm ready");

    var button = $("button");

    button.on("click", changeColorBox);
    button.on("keypress", changeColorBox);
});
    function changeColorBox(evt){
      //Define input within the function to avoid error
      var input = $("input");

      evt.preventDefault();
      //.val() is for input fields
      var color = input.val();
      console.log(color);

      $(".brush").css("background", color);
    }


    for( var i = 0; i <=8000; i++ ){
      $("body").append("<div class='square'/>");
      console.log("hi")
    }

    var square=$(".square");
    // square.on("click", changeToGreen);
    //
    // function changeToGreen(){
    //   $('.square').css("background","green");
    // }
    console.log('hello')


    function changeBoxNotGreen(evt){
      //Define input within the function to avoid error
      var input = $("input");

      evt.preventDefault();
      //.val() is for input fields
      var color = input.val();
      $(this).css("background", color);

    }
    square.on("click", changeBoxNotGreen)

    $('.square').height(10);
    $('.square').width(10);
    $('.square').css("margin", 0);

    square.on("mouseover", changeBoxNotGreen);
