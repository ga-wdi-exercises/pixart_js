var colorField = $('#color-field');
var setColor = $('#set-color');
var brushBox = $('.brush');

var getInput = function (e){
	e.preventDefault();
	var selection = colorField.val();
	brushBox.css("background-color", selection);
};

setColor.on("click", getInput);