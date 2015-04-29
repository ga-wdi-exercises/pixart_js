
  var color = document.getElementById("color-field");
  var brush = document.getElementsByClassName("brush")[0];

  document.getElementById("set-color").addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log(color.value);
    brush.style.backgroundColor = color.value;
  })

  function colorSwatch() {
    for (var i = 0; i < 3; i++) {
      var newDiv = document.createElement("div");
      newDiv.className = "swatch";
      document.body.appendChild(newDiv);
      document.getElementById("set-color").addEventListener("click", function(){
        document.getElementsByClassName("swatch")[2].style.backgroundColor = color.value;
      })

    }
  }

  colorSwatch();

  function createSquares () {
    for (var i = 0; i < 8000; i++) {
      var newDiv = document.createElement("div");
      newDiv.className = "square";
      document.body.appendChild(newDiv);
      newDiv.addEventListener("mouseover", function(){
        this.style.backgroundColor = color.value;
      })
    }
  }

  createSquares();
