$(document).ready(function(){
  $(".brush").css("background-color","red");
});

var pixArt = {
    setColorButton: $("#set-color"),
    setColorBox: $("#color-field"),
    numSquares: 16000,
    ColorListeners: function(){
      this.setColorButton.on("click", this.changeColorBrush);
      this.setColorBox.on("keypress", function(e){
        var key = e.which || e.keyCode;
        if(key === 13){
          this.changeColorBrush;
        }
      });
      //mouseover and using color from color brush
      $(".square").on("mouseover", function(){
        $(this).css("background-color", $(".brush").css("background-color"));
      });
    },
    changeColorBrush: function(e){
      e.preventDefault();
      $(".brush").css("background-color", $("#color-field").val());
    },
    makeSquares: function(){
      for(var x = 0; x < this.numSquares; x++){
        $("body").append("<div class='square'></div>");
      }
    }
}




pixArt.makeSquares();
pixArt.ColorListeners();
