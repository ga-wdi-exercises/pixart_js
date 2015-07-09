$(document).ready( function() {
  $("#set-color").on("click", function() {
    event.preventDefault();
    $(".brush").css("background-color", $("#color-field").val());
  })


  var htmlAppend = "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>" +
                   "<div class='square'></div>"

  $("body").append(htmlAppend)
})
