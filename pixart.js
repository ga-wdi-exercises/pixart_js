// for commit 1
// when user enters hex color, store value
// when user clicks button, div color changes

$("#set-color").on("click", function(event) {
    event.preventDefault()
    var color = $("#color-field").val()
    console.log(color)
    $(".brush").css("background", color)
})

for (var i = 0; i < 8000; i++){
    $("body").append("<div class='square'></div>")
}

$(".square").on("mouseover", function() {
    var color = $("#color-field").val()
    $(this).css("background", color)
})

