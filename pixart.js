var colorField = $('#color-field');
var setColor = $('#set-color');
var brushBox = $('.brush');

var getAndSetColor = function (e){
	e.preventDefault();
	var selection = colorField.val();
	brushBox.css("background-color", selection);
};

var getAndSetColor2 = function (e){
	e.preventDefault();
	if(e.which == 13) {
	var selection = colorField.val();
	brushBox.css("background-color", selection);
}
};

setColor.on("click", getAndSetColor);

setColor.on("keypress", getAndSetColor2);