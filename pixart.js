var button = $("#set-color");


button.on("click", colorCheck);
button.on("click", preventReset);

//*checks for color
function colorCheck() {
// alert($("input").val());
$(".brush").css("background", $("input").val());

}

function preventReset() {
  event.preventDefault();

}

var pageLimit=20;

$(document).ready(function () {
         for (var i = 1; i <= pageLimit; i++) {
             $('body').append('<div class= "square"></div>');
         }
     });


//enter key automatically works
