$("#set-color").on("click", setNewBackground).on("submit", setNewBackground);
// added variables for color switcher
// var thirdBackground = $("#2");
// var secondBackground = $("#1");
// var firstBackground = $("#0");
var clickCounter = 0;

function setNewBackground(){
    newBackground = document.getElementById('color-field').value;
    var backgroundForFirstBox = $(".brush").css("background-color");
    event.preventDefault();

    $(".brush").css("background-color", newBackground);

// added line for color switcher
    if(clickCounter == 0){
        $("#2").css("background-color", newBackground);
    }else if (clickCounter == 1){
        $("#1").css("background-color", newBackground);
//        secondBackground = $("#1").css("background-color");
    } else if (clickCounter == 2){
        $("#0").css("background-color", newBackground);
//        firstBackground = $("#0").css("background-color");
    } else if (clickCounter === 3){

    } else {
        // loop through existing values of squares and set variables
        var firstBackground = $("#0").css("background-color");
        var secondBackground = $("#1").css("background-color");

    // #0 needs to take new background. whatever is in #0 needs to shift to #1, #1 shift to #2
        $("#0").css("background-color", backgroundForFirstBox);
        $("#1").css("background-color", firstBackground);
        $("#2").css("background-color", secondBackground);

    }
    clickCounter++;
}

for (var i=1;i<1000;i++){
    $("body").append("<div></div>");
    $("body div").last().addClass("square");

}
$(".square").on('mouseover', changeBackgroundOfTinySquares);
function changeBackgroundOfTinySquares(){
    var newTinySquareBackground = $(".brush").css("background-color");
    $(this).css("background-color", newTinySquareBackground);
}
//invoke function to create color-switcher swatch after the little divs
addSwatch();

//Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.
function addSwatch() {
    for (var i=0;i<3;i++){
        $("body").append("<div></div>");
        $("body div").last().addClass("color-switcher");
        $(".color-switcher").last().attr("id", i);
    }
    $(".color-switcher").css({
        "display": "inline-block",
        "height": "50px",
        "width": "50px",
        "margin": "0 auto",
        "border": "1px solid black",
        "border-radius": "10px"
    });
//    $(".color-switcher").on('click', switchToOldBackground);

}

// When .brush is submitted, the old newBackground value should get pushed to the div #1. When .brush is submitted again (or any number of times), the old newBackground values should get pushed through the three color swatch options

// on click for any of the color swatch divs, the background of brush should change


//
$(".color-switcher").on("click", function() {
        var switchBackground = $(this).css("background-color");
        $(".brush").css("background-color", switchBackground);
        $(".square").on('mouseover', changeBackgroundOfTinySquares);
    });
