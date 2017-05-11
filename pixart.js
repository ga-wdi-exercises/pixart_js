$(document).ready(function() {
//gets element onsubmit
$("#form").submit(function(event) {
  event.preventDefault();
  colorChanger();
});
//adds color
function colorChanger() {
      switch ($("#color-field").val().toLowerCase()) {
        case 'red':
                $(".brush").css("background", '#FC0505')
                $("body").on("mouseover", '#FC0505')
                break;
        case 'green':
              $(".brush").css("background-color", '#0FF354')
              $("body").on("mouseover", '#0FF354')
                break;
        case 'yellow':
              $(".brush").css("background-color", '#FBFF00')
              $("body").on("mouseover", '#FBFF00')
                break;
        case 'black':
              $(".brush").css("background-color", '#060606')
              $("body").on("mouseover", '#060606')
                break;
        case 'grey':
              $(".brush").css("background-color", '#C5C5C5')
              $("body").on("mouseover", '#C5C5C5')
                break;
        default:
              $(".brush").css("background-color", '')
              $("body").on("mouseover", '')
              }
}
});
  //function colorPaint (){
   //$("body").on("mouseover", function (){
     //colorChanger()
   //})
