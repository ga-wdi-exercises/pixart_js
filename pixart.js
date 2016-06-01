$(document).ready(function() {

  $("#set-color").on("click", function(evt) {
    evt.preventDefault();
    $(".brush").css("background", $("#color-field").val());
  });

  for (var i = 0; i < 1000; i++) {
    $("body").append("<div class='square'></div>");
  }

  $(".square").on("mouseover", function() {
    $(this).css("background",$("#color-field").val());
  });
});

  // JapanPro answer http://stackoverflow.com/questions/3741157/change-background-color-on-mouseover-and-remove-it-after-mouseout
  // $(function() { <-- this serves the same purpose as $(document).ready(function() {})
  //http://stackoverflow.com/questions/3528509/document-readyfunction-vs-function

  //     $(".square").on("mouseover", function() {
  //     $(this).css("background",$("#color-field").val());
  //   });
  // });

  // $(".square").on("mouseout", function() {
  //     $(this).css("background", "white");
  // });

  //   $(".square").on("mouseover", function() {
  // $(.square).css("background",$("#color-field").val());
  // });
