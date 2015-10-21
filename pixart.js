
//object to hold all vars and functions
var pixArtPainter = {
  clickButton: $("#set-color"), //stores the button
  numPixels: 4000, //number of pixels in the canvas
  //attaches a listener to the brush
  setUpBrushListener: function (){
    this.clickButton.bind("click", this.pickColor);
  },
  //sets the color to the brush
  pickColor: function(event) {
    event.preventDefault(); //cancels default event on click
    $(".brush").css("background",$("#color-field").val()); //changes brush background to the value entered in the input box
  },
  //adds the pixels to the body
  setUpCanvas: function(pixelCount){
    for (var i =0; i < pixelCount; i++){
      $("body").append("<div class = 'square'></div>");
    }
  },
  //adds listeners to the pixels
  addCanvasListeners: function() {
    $(".square").each(function(index){
      $(this).on("mouseover", function(){
        $(this).css("background", $(".brush").css("background"))
      })
    })
  },
  //launch everything
  launchPaint: function() {
    this.setUpCanvas(this.numPixels);
    this.addCanvasListeners();
    this.setUpBrushListener();
  }
}
pixArtPainter.launchPaint();
