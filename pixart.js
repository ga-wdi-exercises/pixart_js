$(document).ready(function(){
  var color;
  $("#set-color").on("click",function(evt){
    evt.preventDefault();
    setColor();
  });

  // had to comment this out to prevent setColor() from firing twice
  // input default behavior?
  /*$("#color-field").on("keyup",function(evt){
    evt.preventDefault();
    if (evt.keyCode === 13){
      setColor();
    }
  });*/

  function setColor(){
    color = $("#color-field").val();
    $(".brush").css('background',color);

    var swatchCount = $("#swatch").children().length;

    if (swatchCount == 3){
      $(".swatchBrush").eq(0).remove();
    }

    var swatchDiv = document.createElement('div');
    swatchDiv.className = 'swatchBrush';
    $(swatchDiv).css('background',color).attr('color',color).on("click",function(){
      color = $(this).attr('color');
      $(".brush").css('background',color);
    });
    $("#swatch").append(swatchDiv);
  }

  for (var i=0;i<8000;i++){
    var div = document.createElement('div');
    div.className = 'square';
    $(div).on('mouseover', function(){
      this.style.background = color;
    })
    $("body").append(div);
  }

});
