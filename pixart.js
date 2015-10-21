$(document).ready(function(){
  var color;
  $("#set-color").on("click",function(evt){
    evt.preventDefault();
    setColor();
  });
  $("#color-field")[0].addEventListener('keyup', function(evt){
    if (evt.keyCode === 13){
      setColor();
    }
  });

  function setColor(){
    color = $("#color-field").val();
    $(".brush").css('background',color);
  }

  for (var i=0;i<8000;i++){
    var div = document.createElement('div');
    div.className = 'square';
    div.addEventListener('mouseover', function(){
      this.style.background = color;
    })
    $("body").append(div);
  }

});
