$(document).ready(function(){
  var colorID = $("input:text").val();
  $("#set-color").on("click", function(e){
    e.preventDefault();
    console.log("test!");
    $(".brush").css("background-color", $("#color-field").val());
  });
    for(var i = 0; i < 20; i++){
      $("body").append("<div class = 'square'></div>");
    }
    $(".square").on("click", function(){
      $(this).css("background-color", "green");
    });
});


/*var pixart = {
 clickID: 0,
 colorID: "",

 chooseColor: function(){
   event.preventDefault();
   pixart.clickDiv();
   pixart.clickID++;
   pixart.colorID = $("input:text").val();
   alert("This is your color: " + pixart.colorID);
   $(".brush").css("background", pixart.colorID);
   if (pixart.clickID <= 1){
     for(var i = 0; i < 20; i++){
       var createDiv = $("body").append("<div></div>");
       $("div").eq(i).addClass("square");
     }
   }
 },

 clickButton: function(){
   $("button").on("click",pixart.chooseColor);
 },

 clickDiv: function(){
   $("div.square").on("click", function(){
     alert("its a div!");
   });
 }
};

$(document).ready(function(){
 pixart.clickButton();
});
*/
