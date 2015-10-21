//change $("brush").css("background-color") to $("#form").val() on click of $("#set-color")
console.log("ready freddy");

$("#set-color").on("click", function(e){
  e.preventDefault();
  console.log("click");
  $(".brush").css("background-color", $("#color-field").val())
})
