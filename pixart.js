var typedColor = document.querySelector("#color-field");
var form = document.querySelector("#set-color");
var previewBox = document.querySelector('.brush');
var allSquares = document.querySelectorAll("square");

function boxColor(){
  if (typedColor.value === null || typedColor.value === ""){
    alert("Please type a color into the form field.");
    return false;
  }else{
      previewBox.style.backgroundColor = typedColor.value;
      event.preventDefault();
    }
  }


form.addEventListener("click",boxColor);

// for( var i = 0; i < 19; i++){
//   var div = document.createElement('div');
//   var self = this);
//   div.classList.add('square');
//   div.addEventListener('mouseover', function(){
//     self.style.backgroundColor = previewBox.style.backgroundColor;
//   });
//   document.body.appendChild(div);
// }

for(var b = 0; b < 19; b++){
  var newBox = $("<div class='brush'/>");
  $("body").append(newBox);
  }

$(".brush").click(function(){
    this.style.backgroundColor = typedColor.value;
    event.preventDefault();
  });
