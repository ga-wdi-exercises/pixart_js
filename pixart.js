  var pixart = {
    clickID: 0,
    colorID: "",

    chooseColor: function(){
      event.preventDefault();
      pixart.clickID++;
      pixart.colorID = $("input:text").val();
      alert("This is your color: " + pixart.colorID);
      $(".brush").css("background", pixart.colorID);
      if (pixart.clickID <= 1){
        for(var i = 0; i < 20; i++){
          var createDiv = $("body").append("<div></div>");
          var eachDiv = $("div").eq(i).addClass("square");
        }
      }
    },

    clickButton: function(){
      $("button").on("click",pixart.chooseColor);
    }
  };

  $(document).ready(function(){
    pixart.clickButton();
  });
