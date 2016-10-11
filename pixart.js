$( document ).ready(function() {
  console.log("hello jquery")


$("#set-color").on("click", changeColor);
$("#set-color").keyup(changeColor);

function changeColor() {
        event.preventDefault();
        var color = $("input").val();
        if (color !==""){
          $(".brush").css("background-color", color);
          $("input").val("");
          }
        else {
          alert("Please submit a valid response.");
        }
      };

});
