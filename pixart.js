// variables for paint brush colors
var form = document.querySelection("form").value;
var input = document.querySelection("color-field").value;
var brush = document.querySelection(".brush").value;


// instructions for changing color
form.addEventListener("click", function("event") {
      event.preventDefault();
      brush.style.backgroundColor = newColor.value;
});
