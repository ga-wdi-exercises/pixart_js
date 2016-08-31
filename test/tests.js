(function(){

  test("when I click set color button, the box changes color", function( assert ){
    $("#color-field").val("red")
    $("#set-color").click()
    var color = $(".brush").css("background-color")
    assert.equal( color, "rgb(255, 0, 0)");
  });
  // test("when I submit the form, the box changes color", function( assert ){
  //   $("#color-field").val("red")
  //   console.log($("#form")[0].listeners);
  //   var color = $(".brush").css("background-color")
  //   assert.equal( color, "rgb(255, 0, 0)");
  // });
})()
