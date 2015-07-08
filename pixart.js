//Commit 1: When I click the "Set Color" button, change the color of the "brush" box to selected color
  // Initiate global object
  var canvas = {
      button: document.getElementById( "set-color"), // Grab the Button
      color: $( "input" ) , // The color the user inputs
      brushBox: $( ".brush" ) , // The box we need to grab.
      // Our event listeners referenced as a method
      listener: function() {
          var self = this;
          // On click, do this
          self.button.addEventListener( "click", function() {
              event.preventDefault() ;
              console.log( "Listening for click" ) ; // Check for method
              console.log( self.color.val() ) ; // Check user input
              console.log( self.brushBox.css( "background-color" ) ) ; // Check css selector
              self.brushBox.css( "background-color", self.color.val() ) ; // Change box to color
          })
          // On submit, do this
        self.button.addEventListener( "submit", function() {
                event.preventDefault() ;
                console.log( "Listening for submit" ) ; // Check for method
                console.log( self.color.val() ) ; // Check user input
                console.log( self.brushBox.css( "background-color" ) ) ; // Check css selector
                self.brushBox.css( "background-color", self.color.val() ) ; // Change box to color
            })
        }, // ends listener method
    // Create "tiles" object which should 20 divs of the "square" class and append them to the body
      tiles : function() {
        var self = this ;
        for ( var i = 0; i < 20; i++ ) {
           $( "<div></div>" ).attr("class","square").appendTo( "body" ) ;
          //  var divs = ""
        }
        console.log( "create tiles!") ;
      } ,
  } // ends object
// invoke methods on global object
  canvas.tiles();
  canvas.listener() ;
