//When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (Hint: You will need to use event.preventDefault() somewhere in your code.)
var color;



$("#set-color").on("click", function() {
  event.preventDefault();
  color = $("#color-field").val();
  $(".brush")[0].style.background=color;
})

//The same thing should happen when I press the enter key from inside the input field

$("#set-color").keydown(function(event){
  if (event.keyCode==13) {
    $("#set-color").trigger("click");
  }
})

//Create 20 divs of the "square" class and append them to the body

//Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
for (var i=0; i<8000; i++) {
  $(document.createElement("div")).attr("class", "square").css("height", "10px").css("width", "10px").css("margin", "auto").appendTo("body").on("mouseover", function() {
    $(this).css("background", color);
  });
}

// Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.
