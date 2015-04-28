function changeBackground(evt) {

  evt.preventDefault();

  var color = document.getElementById("color-field").value;
      document.querySelector(".brush").style.backgroundColor = color;
 }

 document.getElementById("set-color").addEventListener("click", changeBackground);
