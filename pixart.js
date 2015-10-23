var input;
$(document).ready(function(){
var colorMenu = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];


//Function that changes background color of any given element
  var setColor = function(target, index, color){
    $(target).eq(index).css('background', color);
  };

//Event Handler for Enter Key
  $('#set-color').on("click", function(evt){
    input = $('#color-field').val();
    evt.preventDefault();
    setColor('.brush', 0, input);
  });

//Event Handler for Click
  $('#color-field').keypress(function(evt){
    if(evt.keyCode == 13){
      input = $('#color-field').val();
      setColor('.brush', 0, input);
    }
  });

//Create small squares
  for(var i=0; i<8000; i++){
    $('body').append('<div class="square"></div>');
  }
//Add event handler to small squares
  $('.square').each(function(index){
      $(this).hover(function(){
          setColor('.square',index, input);
      });
  })

//All Available Colors
$('body').prepend('<div class="container"></div>')
  for(var i=0; i<colorMenu.length; i++){
      $('.container').append('<div class="swatch"></div>');
      $('.swatch').eq(i).css('background', colorMenu[i]);
      $('.swatch').eq(i).attr('title', colorMenu[i]);
      }

  $('.swatch').each(function(){
        var self = this;
        $(this).on('click',function(){
          input = $(self).css('background');
          colorName = $(self).attr('title');
          $('h1').fadeOut(1000);
          $('.brush').css('background', input);
          $('#color-field').val(colorName);
      });
  })


});
