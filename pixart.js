var form = document.getElementById('form');
var input = document.querySelector('#color-field');
var brush = document.querySelector('.brush');

//another attempt at getting the color to switch
/*onclick="document.getElementById('brush').style.color = 'red'">*/

//here is a function with the suggested event.preventDefault
/*$("set-color").click('submit', function(event){
    event.preventDefault();
    $(".brush").css("backgroundcolor", "input.value");
});
};*/


form.addEventListener('submit', function(event){
  event.preventDefault();
  brush.style.backgroundColor = input.value;
});

for( var i = 0; i < 8000; i++){
  var div = document.createElement('div');
  div.classList.add('square');
  div.addEventListener('mouseover', function(){
    this.style.backgroundColor = brush.style.backgroundColor;
  });
  document.body.appendChild(div);
}

//Next step, attempting to add the .png file with CSS Sprites:https://css-tricks.com/css-sprites/ NOT COMPLETED.
