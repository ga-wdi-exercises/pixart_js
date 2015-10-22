$(document).ready(function(){
  $(".brush").css("background-color","red");
});

var pixArt = {
    setColorButton: $("#set-color"),
    clickSetColorListener: function(){
      this.setColorButton.on("click", this.changeColorBrush);
    },
    changeColorBrush: function(event){
      event.preventDefault();
      $(".brush").css("background-color",$("#color-field").val());
    },
}
pixArt.clickSetColorListener();
