var setColor = $("#set-color")
var brushBox = $(".brush")
var    color
var colorField = $("#color-field")

function changeBrushBox(){
    color = $('#color-field').val()
    brushBox.css("background", color);
    return false
}

setColor.on("click", changeBrushBox)
colorField.on("submit", changeBrushBox)

for (i=0; i < 8000; i++) {
    $( "body" ).append( "<div class='square'></div>" );
}

$(".square").on("mouseover", function(){
    $(this).css("background-color", color);
} );
