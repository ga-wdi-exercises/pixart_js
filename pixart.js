
$(document).ready(function canvas() {
    for (i = 0; i<= 5000; i++)
{

  $( "body" ).append($("<div class='square'></div>"))
}
      this.squares = $(".square")
});

inputColor(){
    this.color = this.input.val()
    return this.color
  }

$("button").on("click", function setColor(){
   this.inputColor.css("background", this.color)
 }

 $("form").on("submit", function stop() {
      stop.preventDefault()
      this.setColor()
    })
