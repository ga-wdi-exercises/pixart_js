var setColor = $("#set-color")
var colorField = $("#color-field")
var color
$(document).ready(function(){
  setColor.click(function(evt){
    evt.preventDefault();
    color = colorField.val()
    $(".brush").css("background-color",color)
})










})
