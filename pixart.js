var colorField = $("#color-field");
var setColor = $("#set-color");
var brushBox = $(".brush");

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


// var $square1 = $("<div/>", {
// 	class: "square"});

// var $square2 = $("<div/>", {
// 	class: "square"});

// var $square3 = $("<div/>", {
// 	class: "square"});

// $("body").append($square1);
// $("body").append($square2);
// $("body").append($square3);
// can do a for loop!


for (var i = 0; i < 20; i++) {
	var $square = $("<div/>", {
	class: "square"});
	$("body").append($square);
};




$(".square").click(function() {
	$(this).css("background-color", "green");
});