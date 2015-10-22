$(document).ready(function() {

  var drawing = {

    pixelCount: 8000,

    brushColor: "#1B4370",

    palette: ["#1B4370",],

    borderSelectedBrush: "4px solid darkgray",

    showSelectedBrush: function () {
      var self = this;
      $("div.brush").each( function (divBrush) {
        if ($(this).css("background") == self.brushColor) {
          $(this).css("border", self.borderSelectedBrush);
          console.log("Brush for", self.brushColor, "selected. (Palatte:", self.palette + ")");
        } else { // this div.brush ain't the currently selected color
          $(this).css("border", "0px none rgb(0, 0, 0)");
        }
      });
    },

    setColor: function () {
      var color = $("#color-field").val();
      if ( $("div.brush").css("background") != color ) {
        var self = this;
        if ( color in this.palette ) { // existing color in palette
          this.brushColor = color;
        } else { // completely new color
          this.brushColor = color;
          this.palette.push(color);
          $("div.controls").append($(document.createElement("div")).attr("class", "brush").css("background", color).attr("title", color).css("border", self.borderSelectedBrush ).on("click", function (e) {
            e.preventDefault();
            console.log("clicked on brush div");
            self.brushColor = $(this).css("background");
          }));

        }
      } // else  { do nothing because user reselected the current color. }
      this.showSelectedBrush();


    },
    setup: function () {
      var self = this;
      $("#set-color").on ("click", function (e) {
        e.preventDefault();
        this.setColor();
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

      $("div.brush").on("click", function (e) {
        e.preventDefault();
        console.log("clicked on brush div");
        self.brushColor = $(this).css("background");
      });

    },

  };

  drawing.setup();

});
