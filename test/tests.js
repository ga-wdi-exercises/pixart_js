(function(){
  test("when I click set color button, the box changes color", function( assert ){
    var form = $("#form")[0]
    $("#color-field").val("red")
    form.dispatchEvent(new Event('submit'))
    var color = $(".brush").css("background-color")
    assert.equal( color, "rgb(255, 0, 0)");
  });

  test("there are 8000 divs with a class of square", function (assert) {
    assert.equal($(".square").length, 8000)
  })

  test("when I hover over a square, the square's background changes color", function (assert) {
    $("#color-field").val("red")
    var squares = document.querySelectorAll(".square")
    var randomI = Math.floor(Math.random() * squares.length)
    var randomSquare = squares[randomI]
    if(randomSquare){
      randomSquare.dispatchEvent(new Event('mouseover'))
    }
    var color = $(randomSquare).css("background-color")
    assert.equal(color, "rgb(255, 0, 0)")
  })
})()
