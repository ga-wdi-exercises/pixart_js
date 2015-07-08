var submitButton = $("#set-color");

// submitButton.addEventListener("click", function(event){
    // event.preventDefault();
    // console.log("test");
// });

submitButton.click('click', function(event){
    event.preventDefault();

    // changes box color based on input
    var colorChoice = $("#color-field").val();
    var brushBox = $(".brush");

    brushBox.css("background-color", colorChoice);
});

function squareMaker (){
    for (var i = 0; i < 8000; i++){
        var twentySquares = $("body").after($('<div></>').addClass("square"));

    }
    return twentySquares;
}

squareMaker();


$('.square').on('mouseover', function(event){
    event.preventDefault(); 

    var colorChoice = $("#color-field").val();

    $(event.target).css("background-color", colorChoice);
});

