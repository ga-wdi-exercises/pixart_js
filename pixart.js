$(document).ready(function() {

  // var buttonSetColor = $("#set-color");
  // var divBrush = $("div.brush");
  // var formInput = $("#form input");

  var drawing = {

    setColor: function () {
      var color = $("#color-field").val();
      console.log("Set color to", color);
      $("div.brush").css("background", color);
    },
    setupListeners: function () {
      $("#set-color").on ("click", function (e) {
        e.preventDefault();
        this.setColor();
      }.bind(this));
    },
  };


  // function setColor() {
  //   var color = $("#color-field").val();
  //   console.log("Set color to", color);
  //   $("div.brush").css("background", color);
  // }

  // for ( var i = 0; i < 20; i++ ) {
  //   $("body").append()
  // }

  drawing.setupListeners();

});
