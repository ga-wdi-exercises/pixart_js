var setColor = $('#set-color')


function changeColor(){
  var color = $('#color-field').val()
  $(".brush").css("background",color);
  event.preventDefault()
}

setColor.on("click",changeColor);

var addDiv = $("<div class='square'></div>")

for (i = 0; i <21; i++) {
var addDiv = $("<div class='square'></div>")
$("body").append(addDiv);

};

//.val
