
var pixelArt = {

	$color : $( "input" ) ,
	$brushBox : $( ".brush" ) ,
	// swatchesQueue : [],

	canvas : function() {
		var self = this ; 

		for ( var i = 0; i < 8000; i++ ) {
			$( "<div></div>" ).addClass('square').appendTo( "body" ).hover( function() {
				$(this).css("background", self.$brushBox.css( "background-color" )) ;
			}) ;
		} 
	} ,

	eventListener : function() {
		var self = this ;

		$( "#form" ).submit( function( event ) {
			event.preventDefault() ; 
			self.$brushBox.css( "background-color", self.$color.val() ) ;

			// self.setColor() ; 

			var $swatches = $( ".swatch") ;

			// for ( var i = 0; i < $swatches.length; i++ ) {
			// 	$swatches.eq(i).css( "background-color", self.swatchesQueue[i] ) ;	
			// } ;

			for (var i = $swatches.length - 1; i > 0; i-- ) {
				$swatches.eq(i).css('background-color', $swatches.eq(i - 1).css('background-color'))
			}
			$swatches.eq(0).css( "background-color", self.$color.val() ) ;
		} ) ;
	} , 

	// setColor : function() {
	// 	this.swatchesQueue.splice( 0, 0, this.$color.val() ) ;
	// 		pixelArt.swatchesQueue.splice( $( "div.swatch" ).length, pixelArt.swatchesQueue.length ) ;

	// 	console.log( this.swatchesQueue ) ; 
	// } ,

	createSwatch : function() {
		var self = this ;

		for ( var i = 0; i < 4; i++ ) {
			$( "<div></div>" ).addClass('swatch').appendTo( "div.swatches" ).click( function() {
				// var color = self.swatchesQueue[$( ".swatch" ).index($(this))] ; 

				// self.$brushBox.css( "background-color" , color ) ; 

				self.$brushBox.css( "background-color" , $(this).css('background-color') ) ; 
			})  ; 
		} 

	}
}

pixelArt.createSwatch() ;
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