
  var color = document.getElementById("color-field");
  var brush = document.getElementsByClassName("brush")[0];

  document.getElementById("set-color").addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log(color.value);
    brush.style.backgroundColor = color.value
  })

  
