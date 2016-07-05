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

      $(".brush").css("background", color)
    }


    for( var i = 0; i <=20; i++ ){
      $("body").append($("<div class='square'/>"))
      console.log("hi")
    }

    var square=$(".square");
    square.on("click", changeToGreen);

    function changeToGreen(){
      $('.square').css("background","green");
    }
