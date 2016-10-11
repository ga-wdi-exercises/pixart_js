$(document).ready(function(){
  console.log("YOOOO")

    var colorInput = $("#color-field").val();

    function changeColor (){
    $(".brush").css("background-color", $("#color-field").val());
    event.preventDefault();
    }

    function updateColor (){
      $(this).css("background-color", $("color-field").val());

    }

    $("#set-color").on("click", changeColor)
})
