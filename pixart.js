
var pixArtPainter = {
  clickButton: $("#set-color"),
  numPixels: 4000,
  pickColor: function(event) {
    event.preventDefault();
    $(".brush").css("background",$("#color-field").val());
  },
  setUpBrushListener: function (){
    this.clickButton.bind("click", this.pickColor);
  },
  setUpCanvas: function(pixelCount){
    for (var i =0; i < pixelCount; i++){
      var newPixel = $("<div class = 'square'></div>")
      $("body").append(newPixel);
    }
  },
  addCanvasListeners: function() {
    $(".square").each(function(index){
      $(this).on("mouseover", function(){
        $(this).css("background", $(".brush").css("background"))
      })
    })
  },
  launchPaint: function() {
    this.setUpCanvas(pixArtPainter.numPixels);
    this.addCanvasListeners();
    this.setUpBrushListener();
  }
}
pixArtPainter.launchPaint();
