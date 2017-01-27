var button = $("#button");
// var input = $(".text");
var brush = $(".brush");

function changeBrushColortoInput () {
  var color = document.getElementById("color-field").value;
  // var color = $("#color-field").val(); //need to get the value from form
  $(".brush").css("background","color");

}

button.on("click", changeBrushColortoInput());

// function elt(name, attributes) {
//   var node = document.createElement(name);
//   if (attributes) {
//     for (var attr in attributes)
//       if (attributes.hasOwnProperty(attr))
//         node.setAttribute(attr, attributes[attr]);
//   }
//   for (var i = 2; i < arguments.length; i++) {
//     var child = arguments[i];
//     if (typeof child == "string")
//       child = document.createTextNode(child);
//     node.appendChild(child);
//   }
//   return node;
// }

// button.color = function(cx) {
//   var input = elt("input", {type: "color"});
//   input.addEventListener("change", function() {
//     cx.fillStyle = input.value;
//     cx.strokeStyle = input.value;
//   });
//   return elt("span", null, "Color: ", input);
// };
