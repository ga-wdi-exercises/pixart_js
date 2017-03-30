var colorField = $("#color-field");
var setColor = $("#set-color");
var brushBox = $(".brush");

var setByClick = function (e){
	e.preventDefault();
	var selection = colorField.val();
	brushBox.css("background-color", selection);
};

var setByEnter = function (e){
	e.preventDefault();
	if(e.which == 13) {
	var selection = colorField.val();
	brushBox.css("background-color", selection);
	}
};

var setForSquare = function (e){
	e.preventDefault();
	var selection = colorField.val();
	$(this).css("background-color", selection);
};

for (var i = 0; i < 8000; i++) {
	var $square = $("<div/>", {
	class: "square"});
	$("body").append($square);
};


setColor.on("click", setByClick);

setColor.on("keypress", setByEnter);


$(".square").on("mouseover", setForSquare);

//css file already has square class set with height and width of 10px and a margin of 0


