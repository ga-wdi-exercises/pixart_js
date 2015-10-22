$(document).ready(function() {

  // var buttonSetColor = $("#set-color");
  // var divBrush = $("div.brush");
  // var formInput = $("#form input");

  var drawing = {

    pixelCount: 20,

    brushColor: "black",

    setColor: function () {
      var color = $("#color-field").val();
      console.log("Set color to", color);
      $("div.brush").css("background", color);
      this.brushColor = color;
    },
    setup: function () {
      $("#set-color").on ("click", function (e) {
        e.preventDefault();
        this.setColor();
      }.bind(this));

      for ( var i = 0; i < this.pixelCount; i++ ) {
        //var newSquare = document.createElement("div");
        //newSquare.setAttribute("class", "square");
        // newSquare.addEventListener("click")
        //$("body").append(newSquare);
        $("body").append("<div class=\"square\"></div>");
      }
      console.log("Just created", this.pixelCount, "square divs.");

      $("div.square").each( function() {
        $(this).on("mouseover", function (e) {
          e.preventDefault();
          //console.log("hovering");
          // $(this).css("background", color);
          $(this).css("background", drawing.brushColor); // not ideal
        });
      });

    },

  };

  drawing.setup();

});
