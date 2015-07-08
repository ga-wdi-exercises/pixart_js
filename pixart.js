
var pixelArt = {

	color : $( "input" ) ,
	brushBox : $( ".brush" ) ,

	canvas : function() {
		var self = this ; 

		for ( var i = 0; i < 8000; i++ ) {
			$( "<div></div>" ).addClass('square').appendTo( "body" ).hover( function() {
				$(this).css("background", self.color.val()) ;
			}) ;
		} 
	} ,

	eventListener : function() {
		var self = this ;

		$( "#form" ).submit( function( event ) {
			event.preventDefault() ; 
			self.brushBox.css( "background-color", self.color.val() ) ;
		} ) 
	}
}

pixelArt.canvas() ;
pixelArt.eventListener() ; 

/*
var color = $( "input" ) ;
var brushBox = $( ".brush" ) ;

function canvas() {
	for ( var i = 0; i < 8000; i++ ) {
		$( "<div></div>" ).addClass('square').appendTo( "body" ).hover( function() {
			$(this).css("background", color.val()) ;
		}) ;
	} 
} ;

$( "#form").submit( function( event ) {
	event.preventDefault() ; 
	brushBox.css( "background-color", color.val() ) ;
} );

canvas() ;

*/