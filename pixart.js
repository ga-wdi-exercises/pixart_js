
  var color = document.getElementById("color-field");
  var brush = document.getElementsByClassName("brush")[0];

  document.getElementById("set-color").addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log(color.value);
    brush.style.backgroundColor = color.value;
  })

  function createSquares () {
    for (var i = 0; i < 8001; i++) {
      var newDiv = document.createElement("div");
      newDiv.className = "square";
      document.body.appendChild(newDiv);
      newDiv.addEventListener("mouseover", function(){
        this.style.backgroundColor = color.value;
      })
    }
  }

  createSquares();
