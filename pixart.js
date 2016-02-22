// var changecolor = document.querySelector("#color");

var button = $("#color");


button.click(function(){


var inputcolor = $("#color-field").val();
if(inputcolor == ""){
  $("#message").text("please input a color");
  setTimeout(function(){
$("#message").text("");
  }, 4000);
  return;



}
console.log(inputcolor);
$("#color-field").css("background-color" , inputcolor);

})

function adddivs(){

  for(var i =0; i<20; i++){
    var b = '<div id="s-' + i + '" class="square" onclick="changecolor(this.id)"></div>';

$(".controls").append(b);

}};
adddivs();

function changecolor(str){

var input = str;
var thisElm = $('#' + input + '');
thisElm.css('background-color', 'red');
console.log(str);
console.log(thisElm);

  changeCol(thisElm);

}

function changeCol(str){

  var thisElm = str;
  console.log(thisElm);

  if(thisElm.css('background-color') == 'red'){
    thisElm.css('background-color', 'green');
  }
  else {
   thisElm.css('background-color', 'green');
  }

}
