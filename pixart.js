// var button = document.querySelector("#set-color");
// var colors = document.querySelector("#color-field");
// var brusher = document.querySelector('.brush');
//
//
// form.addEventListener('submit', function(event){
//   event.preventDefault();
//   brusher.style.backgroundColor = colors.value;
// });
//
// for( var i = 0; i < 5000; i++){
//   var div = document.createElement('div');
//   div.classList.add('square');
//   div.addEventListener('mouseover', function(){
//     this.style.backgroundColor = brusher.style.backgroundColor;
//   });
//   document.body.appendChild(div);
// }

//Since I am using Jquery I don't need the variables.
//First I need to target the button.
$("#form")[0].addEventListener("submit",function(pizza){
  event.preventDefault()//This took a while to figure out. I can use this for the cash register exercise.
$(".brush").css("background",$("#color-field").val())
})

for( var i = 0; i < 5000; i++ ){
  $("body").append($("<div class='square'/>"))
}//This part remained the same for the most part.

document.body.addEventListener("mouseover", function(event){
  if(event.target.classList.contains("square")){
    $(event.target).css("background",$("#color-field").val())
  }
})//I had to reference the solution a few times on this last part to make sure I got the syntax right. 
