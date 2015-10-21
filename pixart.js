var pixArtPainter = {
  clickButton: $("#set-color"),
  pickColor: function(event) {
    event.preventDefault();
      $(".brush").css("background-color",$("#color-field").val());
  },  
  setUpListener: function (){
    //event.preventDefault();
    this.clickButton.bind("click", this.pickColor);
  },
}
pixArtPainter.setUpListener();
