(function(){
  test("when I click set color button, the box changes color", function( assert ){
    $("#color-field").val("red")
    var form = $("#form")[0]
    var listener = listeners[form.getAttribute("data-listener-id")]
    listener.cb(new Event("Hi"))
    var color = $(".brush").css("background-color")
    assert.equal( color, "rgb(255, 0, 0)");
  });

  test("there are 8000 divs with a class of square", function (assert) {
    assert.equal($(".square").length, 8000)
  })

  test("when I hover over a square, the square's background changes color", function (assert) {
    $("#color-field").val("red")
    var listener;
    if($("body").attr("data-listener-id")) {
      var id = $("body").attr("data-listener-id")
      listener = listeners[id]
      var squares = document.querySelectorAll(".square")
      var customEvent = $.Event("mouseover")
      customEvent.target = squares[0]
      listener.cb(customEvent)
      assert.equal($(squares[0]).css("background-color"), "rgb(255, 0, 0)")
    }
    if($(".square").attr("data-listener-id")) {
      var id = $(".square").attr("data-listener-id")
      listener = listeners[id]
      var squares = document.querySelectorAll(".square")
      var customEvent = $.Event("mouseover")
      customEvent.target = squares[0]
      listener.cb(customEvent)
      assert.equal($(squares[0]).css("background-color"), "rgb(255, 0, 0)")
    }
  })
})()
