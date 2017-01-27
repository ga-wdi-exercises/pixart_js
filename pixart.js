$(document).ready(function(){
  console.log("Commit-6")
});

var button = $("#set-color");
var textInput = $("#color-field");

button.on('click', function (event) {
    event.preventDefault();
    console.log("in click handler 2");
    color = textInput.val();
    $(".brush").css("background",color);


});

textInput.keyup(function(event){
    //do we have then enter key?
    if(event.keyCode == 13){
        console.log("have hit enter key");
        button.click();
    }
});

//obtain the body element
var selectBody = $('body');
for (i=0; i<8000; i++) {
   // console.log("id: " + i);
    //append('<div id="div'+ i +'" />');
    //obtain the body element
    var div = $('<div id="div'+ i +'"  class="square"/>');

    selectBody.append(div);
}



//$('.square').on('click',function(event){
//  event.preventDefault();
//  $(this).css("background",textInput.val());
//   // $(this).css("background","green");
//});

$('.square').on('mouseover',function(event){
  event.preventDefault();
  $(this).css("background",textInput.val());
   // $(this).css("background","green");
});
