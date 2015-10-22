
//object to hold all vars and functions
var pixArtPainter = {
  currentColor: "#1B4370", //this is the current color being drawn
  clickButton: $("#set-color"), //stores the button
  numPixels: 4000, //number of pixels in the canvas
  numExtraBrushes: 3, //number of extra brushes, if 0 there will still be 1 brush
  //sets up the extra brushes
  setUpBrushes: function() {
    for(var i=1; i <= this.numExtraBrushes; i++){
      $(".controls").append("<div class='brush'></div>");
    }
    //adjusts css so I don't have to push the css file too
    $(".brush").css("display", "inline-block");
    $(".brush").css("margin", "10px 10px 10px 10px");
  },
  //this function sets current color to the color of whichever brush is clicked on
  pickColorBrush: function(event){
    pixArtPainter.currentColor = $(event.target).css("background");
  },
  //adds listeners to each brush
  addBrushListeners: function(){
     for(var i=0; i <= this.numExtraBrushes; i++){
       $(".brush").eq(i).on("click", this.pickColorBrush);
     }
  },
  //attaches a listener to the input box's button
  setUpBrushListener: function (){
    this.clickButton.bind("click", this.pickColor);
  },
  //sets the  current color to the brush that was clicked on OR to the value of the input box
  pickColor: function(event) {
    //console.log(pixArtPainter.numExtraBrushes)
    event.preventDefault(); //cancels default event on click
    for(var i=pixArtPainter.numExtraBrushes; i>=1; i-=1){
       //changes each additional brush background
      $(".brush").eq(i).css("background",$(".brush").eq(i-1).css("background"));
    }
    $(".brush").eq(0).css("background",$("#color-field").val()); //changes primary brush background to the value entered in the input box
    pixArtPainter.currentColor = $("#color-field").val(); //changes current color to the input box's value
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
        $(this).css("background", pixArtPainter.currentColor)
      })
    })
  },
  //launch everything
  launchPaint: function() {
    this.setUpBrushes();
    this.addBrushListeners();
    this.setUpCanvas(this.numPixels);
    this.addCanvasListeners();
    this.setUpBrushListener();
  }
}
pixArtPainter.launchPaint();
