//Commit 1: When I click the "Set Color" button, change the color of the "brush" box to selected color
  // Initiate global object
  var canvas = {
      clickMe: document.getElementById( "set-color"), // Grab the Button
      color: $( "input" ) , // The color the user inputs
      brushBox: $( ".brush" ) , // The box we need to grab.
      // Our event listeners referenced as a method
      listener: function() {
          var self = this;
          // On click, do this
          self.clickMe.addEventListener( "click", function() {
              event.preventDefault() ;
              console.log( "Listening" ) ; // Check for method
              console.log( self.color.val() ) ; // Check user input

              console.log( self.brushBox.css( "background-color" ) ) ; // Check css selector
              self.brushBox.css( "background-color", self.color.val() ) ; // Change box to color
          })
      }

  }
// invoke methods on global object
  canvas.listener() ;
