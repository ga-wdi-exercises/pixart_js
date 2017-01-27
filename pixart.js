$(document).ready(function(){
  console.log("Commit-3")
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
for (i=0; i<20; i++) {
    $("body").append("<div id=i class='square'></div>")
}
