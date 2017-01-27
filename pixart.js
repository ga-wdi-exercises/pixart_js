$('button').click(function(event){
  event.preventDefault();
});
for (var i = 0; i < 21; i++) {
var newDiv = document.createElement("div");
newDiv.className = 'star';
document.getElementByName('star').appendChild(newDiv);

}
