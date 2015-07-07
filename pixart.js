// set up click counter variable and newBackground variable
var clickCounter = 0;
var newBackground;

// set up event listener for the input box, for both click and submit. When either event happens, the function setNewBackground fires
$("#set-color").on("click", setNewBackground).on("submit", setNewBackground);

//invoke function to create color-switcher swatch
addSwatch();

// this function changes the color of the brush and manages the color values within the color switcher (based on the click counter)
function setNewBackground(){
    // set up a global variable "newBackground" to contain the background color of the brush
    newBackground = document.getElementById('color-field').value;
    // set up a variable for the function to get the brush color before it changes. This will be very useful in the color switcher below
    var backgroundForFirstBox = $(".brush").css("background-color");
    event.preventDefault();
    //this line changes the color of the brush to match the input value
    $(".brush").css("background-color", newBackground);

    //This if-else setup manages the values within the color switcher, starting with the first value we enter. That gets added to the first box, farthest to the right. Values get added moving left with each click, until we hit 4 clicks, at which point, the values begin shifting to the right.
    if(clickCounter == 0){
        $("#2").css("background-color", newBackground);
    }else if (clickCounter == 1){
        $("#1").css("background-color", newBackground);
    } else if (clickCounter == 2){
        $("#0").css("background-color", newBackground);
    } else if (clickCounter === 3){

    } else {
        //in order to shift the values to the right, we need to get the existing backgrounds of squares and set them as variables
        var firstBackground = $("#0").css("background-color");
        var secondBackground = $("#1").css("background-color");
        // Box ID 0 needs to take the next most recent background, and then the values should shift rightward, i.e. whatever is in #0 needs to shift to #1, #1 shift to #2
        $("#0").css("background-color", backgroundForFirstBox);
        $("#1").css("background-color", firstBackground);
        $("#2").css("background-color", secondBackground);

    }
    // add 1 to the click counter each time
    clickCounter++;
//    return clickCounter;
}

//create the little boxes for the drawing board
for (var i=1;i<1000;i++){
    $("body").append("<div></div>");
    $("body div").last().addClass("square");
}

//add event listener to each of the boxes. On mouseover, execute the function!
$(".square").on('mouseover', changeBackgroundOfTinySquares);

function changeBackgroundOfTinySquares(){
    // set a variable to get the background color of the brush
    var newTinySquareBackground = $(".brush").css("background-color");
    // using "this" to edit only the tiny square that invoked this function, change the background color
    $(this).css("background-color", newTinySquareBackground);
}

//annnnnd here's the function that created the swatch. We invoked this function way up above
function addSwatch() {
    //simple for loop to create the divs where I want them and add a class
    for (var i=0;i<3;i++){
        $(".controls").append("<div></div>");
        $(".controls div").last().addClass("color-switcher");
        $(".color-switcher").last().attr("id", i);
    }
    // styles for my color switcher boxes
    $(".color-switcher").css({
        "display": "inline-block",
        "height": "50px",
        "width": "50px",
        "margin": "0 auto",
        "border": "1px solid black",
        "border-radius": "10px"
    });

}


//set up event listener for color swatch. on click for any of the color swatch divs, the background of brush should change
$(".color-switcher").on("click", function() {
    // created variable to hold the background color value of "this" i.e. whatever square was clicked on
    var switchBackground = $(this).css("background-color");
    // change the background color of .brush to that color
    $(".brush").css("background-color", switchBackground);
    // change the background color of the tiny squares to that color
    $(".square").on('mouseover', changeBackgroundOfTinySquares);
    clickCounter++;
}
);
