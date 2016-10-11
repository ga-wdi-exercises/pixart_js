$("#set-color").on("click", function() {
    event.preventDefault();
    var color = $('#color-field').select().val();
    $('.brush').css('background-color', color);
});


$("#set-color").on("keypress", "return", function() {
    event.preventDefault();
    var color = $('#color-field').select().val();
    $('.brush').css('background-color', color);
});

for (i = 0; i < 20; i++) {
    $("body").append("<div class = 'square'></div>");
}

$(".square").on("click", function() {
    $(this).css("background", $("#color-field").val());
});
