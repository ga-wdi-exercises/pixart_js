$("document").ready(function(){
//add event listener to button
  $("#set-color").on("click", function(evt){
    //prevent default reload on button
    evt.preventDefault();
    //debug comment
    console.log("clicked");
    //get value of text input field and assign it to brush
    var brushInput = $("#color-field").val();
    $(".brush").css("background", brushInput);

  })

})
