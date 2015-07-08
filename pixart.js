
var clickMe = document.getElementById( "set-color") ;
var color = $( "input" ) ;
var brushBox = $( ".brush" ) ;
var inputField = document.getElementById( "color-field" ) ;

function canvas() {
	for ( var i = 0; i < 8000; i++ ) {
		$( "<div></div>" ).addClass('square').appendTo( "body" ).hover(function() {
			$(this).css("background", color.val()) ;
		}) ;
	} 
} ;

clickMe.addEventListener( "click", function() {
	event.preventDefault() ; 
	brushBox.css( "background-color", color.val() ) ;
} );

inputField.addEventListener( "submit", function() {
	event.preventDefault() ; 
	brushBox.css( "background-color", color.val() ) ;
} ) ; 

canvas() ;




/*

var pixelArt = {
	clickMe : document.getElementById( "set-color") ,
	color : $( "input" ) ,
	myText : $( "span" ) ,
	brushBox : $( ".brush" ) ,
	inputField : document.getElementById( "color-field" ) ,
	body : document.body ,

	// changeColor : function() {
	// 	.css( "background-color", "red" ) ; 
	// } ,

	changeColor : function() {
			document.getElementsByClassName( "square" ).css("background-color", "red" ) ;
		} , 

	canvas : function() {
		var self = this ; 

		for ( var i = 0; i < 8000; i++ ) {
			$( "<div></div>" ).addClass('square').appendTo( "body" ) ;
			document.getElementsByClassName( "square" ).addEventListener( "mouseover", this.changeColor ) ;
			} 
		} ,

	eventListener : function() {
		var self = this;

		self.clickMe.addEventListener( "click", function() {
			event.preventDefault() ; 
			self.brushBox.css( "background-color", self.color.val() ) ;
		} ) , 

		self.inputField.addEventListener( "submit", function() {
			event.preventDefault() ; 
			self.brushBox.css( "background-color", self.color.val() ) ;
		} ) 
	}

}

pixelArt.canvas() ;
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
