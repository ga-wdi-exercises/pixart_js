$(document).ready(function(){
    $("#set-color").click(function(){
      event.preventDefault();  

    $(".brush").css("background-color", $("#color-field").val());

    });
});
