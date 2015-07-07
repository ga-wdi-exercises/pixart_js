	/*
	When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (Hint: You will need to use event.preventDefault() somewhere in your code.)
Use jQuery to select the element, and addEventListener to handle clicks
$("body")[0].addEventListener...
	*/

var pixelArt = {
	clickMe : document.getElementById( "set-color") ,
	color : $( "input" ) ,
	myText : $( "span" ) ,
	brushBox : $( ".brush" ) ,
	inputField : document.getElementById( "color-field" ) ,


	eventListener : function() {
		var self = this;

		self.clickMe.addEventListener( "click", function() {
			event.preventDefault() ; 
			// console.log( self.color.val() ) ; 
			self.myText.text( self.color.val() );
			console.log( self.brushBox.css( "background-color" ) ) ;
			self.brushBox.css( "background-color", self.color.val() ) ; 
		}) , 
		self.inputField.addEventListener( "submit", function() {
			event.preventDefault() ; 
			// console.log( self.color.val() ) ; 
			self.myText.text( self.color.val() );
			console.log( self.brushBox.css( "background-color" ) ) ;
			self.brushBox.css( "background-color", self.color.val() ) ; 
		} )
	}

}

pixelArt.eventListener() ; 

/*
	var clickMe = document.getElementById( "set-color") ; 
	var color = $( "input" ).val() ; 
	// var brushBox = $( ".brush" ) ;

//clicking on button -> change brushBox
	clickMe.addEventListener( "click", function() {
		event.preventDefault() 
		var self = this ; 
		console.log( "blah" ) ;
		// getValue();
		console.log( self.color ) ;
		$( "span" ).text( self.color );
		$( ".brush" ).css( "background" ) ;
		var bla = $('input').val();
		alert(bla);
		
		
	})

// function getValue() {
// 	$( "input" )
//   .keyup(function() {
//     var value = $( this ).val();
//     $( "span" ).text( value );
//     return value;
//   })
//   .keyup();

// }

*/
