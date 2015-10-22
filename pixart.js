$(document).ready(function() {

  var drawing = {

    pixelCount: 8000,

    brushColor: "#1B4370",

    setColor: function () {
      var color = $("#color-field").val();
      console.log("Set color to", color);
      if ( $("div.brush").css("background") != color ) {
        $("div.brush").css("background", color).attr("title", color);
        this.brushColor = color;
      }

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

    },

  };

  drawing.setup();

});
