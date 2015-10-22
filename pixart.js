$(document).ready(function(){
	beginArt();

	function beginArt() {
	  $("#set-color").on("click", newColor);
	}

	function newColor(evt) {
	      evt.preventDefault();
	      color = $("#color-field").val();
	      $(".brush").css("background", color);
	}
})