var paint = {
  button:  document.getElementById("set-color"),
  brush:  document.getElementsByClassName("brush")[0],
  body:  document.getElementsByTagName("body")[0],
  colorPalette: [],
  drawCanvas: function() {
    for (var i = 0; i < 8000; i++){
      $( "body" ).append( "<div class='square'></div>");
      }
  },
  listen: function() {
    this.button.addEventListener("click", function(){ //Why don't I need to pass event as an argument?
      event.preventDefault();
      if (this.colorPalette.length >= 3){this.colorPalette.shift();}
      this.colorPalette.push(window.getComputedStyle(this.brush).backgroundColor);
      console.log(this.colorPalette);
      var color = $("#color-field").val();
      $("#color-field").val("");
      $(".brush").css("background", color);
      for(var i = 0; i < this.colorPalette.length; i++){
        clone = $(this.brush).clone();
        clone.css("backgroundColor", this.colorPalette[i]);
        clone.appendTo($(".controls"));
        $(".brush").css("display", "inline-block");
      }

    }.bind(this)//When instead of invoking an anonymous I have the event handler call a method of paint or a nested function, I can't set scope where I expect to
  )
    this.body.addEventListener("mouseover", function(e){
      if (e.target !== e.currentTarget && e.target.className == "square"){
        e.target.style.background = window.getComputedStyle(this.brush).backgroundColor;
      }
      e.stopPropagation(); //Was worried that this would interfere with tbe event listener on the button but it doesn't
    }.bind(this)
    )
  },



}


paint.drawCanvas();
paint.listen();
//

// body.addEventListener("mouseover", function(e){
//   if (e.target !== e.currentTarget && e.target.className == "square"){
//         e.target.style.background = window.getComputedStyle(brush).backgroundColor;
//   }
//   e.stopPropagation(); //Was worried that this would interfere with tbe event listener on the button but it doesn't
//   }
// );

//
//
// function changeColor(){ //Why don't I need to pass event as an argument?
//   event.preventDefault();
//   var color = $("#color-field").val();
//   $("#color-field").val("");
//   console.log(color);
//   $(".brush").css("background", color);
// }
