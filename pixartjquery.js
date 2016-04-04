$(document).on("ready", function(){
  var form = $("#form")
  var brush = $(".brush")
  var input = $("#color-field")
  var button = $("#set-color")

  $("#form").on("submit", function(){
    event.preventDefault();
    console.log("happy")
    brush.css("backgroundColor", input.val())

  });

});


// form.on('onkeydown', function(event){
//   event.preventDefault();
//   brush.style.backgroundColor = input.val();
// });
//
// for(x = 0; x < 10000; x++) {
//     var div = document.createElement('div');
//     div.classList.add('square')
//       div.addEventListener('mouseover', function() {
//       this.style.backgroundColor = brush.style.backgroundColor
//   })
//     document.body.appendChild(div);
//   };
