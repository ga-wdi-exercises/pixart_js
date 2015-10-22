$(document).ready(function() {

  var drawing = {

    pixelCount: 8000,

    brushColor: "#1B4370",

    palette: [],

    borderSelectedBrush: "4px solid darkgray",

    showSelectedBrush: function () {
      var self = this;
      $("div.brush").each( function () {
        if ($(this).attr("title") == self.brushColor) {
          $(this).css("border", self.borderSelectedBrush);
          console.log("Brush colored", self.brushColor, "selected. (Palatte:", self.palette + ")");
        } else { // this div.brush ain't the currently selected color
          $(this).css("border", "0px none rgb(0, 0, 0)");
        }
      });
    },
    createNewColor: function (color) {
      this.palette.push(color);
      this.brushColor = color;
      var self = this;
      $("div.controls").append($(document.createElement("div")).attr("class", "brush").css("background", color).attr("title", color).on("click", function (e) {
        e.preventDefault();
        self.brushColor = $(this).attr("title");
        self.showSelectedBrush();
      }));
    },
    requestColorChange: function () { // gets the requested color and calls createNewColor and showSelectedBrush if needed
      var color = $("#color-field").val();
      console.log("this.palette:", this.palette, "color:", color);
      console.log("color in this.palette:", color in this.palette);
      console.log("typeof color:", typeof color);
      console.log("typeof this.palette[1]:", typeof this.palette[1]);
      console.log("typeof this.palette:", typeof this.palette);
      if ( color == this.brushColor ) { // if same brush requested, do nothing
        console.log("Color", color, "already selected.");
      } else if ( this.palette.indexOf(color) != -1 ) { // check if already in palette
        this.brushColor = color;
        console.log("Color", color, "already in palette (" + this.palette + ").");
      } else { // got a completely new color, folks
        this.createNewColor(color); // push new color to palette and set as brush color
      }
      this.showSelectedBrush();
    },
    setup: function () {
      $("div.brush").remove();
      if ( this.brushColor ) {
        this.createNewColor(this.brushColor);
      }

      var self = this;
      $("#set-color").on ("click", function (e) {
        e.preventDefault();
        this.requestColorChange();
      }.bind(this));

      for ( var i = 0; i < this.pixelCount; i++ ) {
        $("body").append("<div class=\"square\"></div>");
      }
      console.log("Just created", this.pixelCount, "square divs.");

      $("div.square").each( function() {
        $(this).on("mouseover", function (e) {
          e.preventDefault();
          $(this).css("background", self.brushColor);
        });
      });
    },
  };

  drawing.setup();

});
