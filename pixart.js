var pixArtPainter = {
  clickButton: $("#set-color"),
  numPixels: 20,
  currentColor: null,
  pickColor: function(event) {
    event.preventDefault();
    $(".brush").css("background-color",$("#color-field").val());
    pixArtPainter.currentColor = $("#color-field").val();
    //console.log(pixArtPainter.currentColor);
  },
  setUpListener: function (){
    //event.preventDefault();
    this.clickButton.bind("click", this.pickColor);
  },
  setUpCanvas: function(pixelCount){
    for (var i =0; i < pixelCount; i++){
      var newPixel = $("<div class = 'square'></div>")
      newPixel.on("click", function(){
        newPixel.css("background-color", $(".brush").css("background-color"));
      })
      $("body").append(newPixel);
    }
  },
  addListeners: function(){
    for (var i=0; i < this.numPixels; i++){
      $("div.square")[i].on("click", function(){
        $("div.square")[i].css("background-color", $(".brush").css("background-color"));
      })

    }
  }
}
pixArtPainter.setUpCanvas(pixArtPainter.numPixels);
pixArtPainter.setUpListener();
