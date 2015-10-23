$(document).ready(function(){
	beginArt();

	var x = 0

	function beginArt() {
	  $("#set-color").on("click", newColor);
	}

	function newColor(evt) {
	      evt.preventDefault();
	      color = $("#color-field").val();
	      $(".brush").css("background", color);
	}

	for(x = 0; x < 8000; x++){		
		var pixBlocks = "<div class='square'></div>";
		$('body').append(pixBlocks);
	}	

	$(".square").on("mouseover", function(){
		$(this).css("background", color)
	});

})