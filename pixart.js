$("set-color").click(setColor);

function setColor() {
  event.preventDefault();
  $(".brush").css('background', document.getElementById('color-field').value);
  }
