var fs = require('fs')
var jsdom = require('jsdom')
var markup = fs.readFileSync("index.html", "utf8")

describe("Solution", function () {

  it("sets the brush box's background color when clicked", function (done) {
    jsdom.env({
      html: markup,
      scripts: "pixart.js",
      done: function (err, window) {
        if(err) console.log(err)
        var document = window.document
        var btn = document.getElementById('set-color')
        var input = document.getElementById('color-field')
        var box = document.querySelector(".brush")
        input.value = "red"
        btn.click()
        var color = box.style.background || box.style.backgroundColor
        expect(color).toBe("red")
        done()
      }
    })
  })

  it("has 8000 .square divs", function (done) {
    jsdom.env({
      html: markup,
      scripts: "pixart.js",
      done: function (err, window) {
        if(err) console.log(err)
        var document = window.document
        var squares = document.querySelectorAll(".square")
        expect(squares.length).toBe(8000)
        done()
      }
    })
  });

  it("supports changing a square's background by clicking on it", function (done) {
    jsdom.env({
      html: markup,
      scripts: "pixart.js",
      done: function (err, window) {
        if(err) { console.log(err) }
        var document = window.document
        var squares = document.querySelectorAll(".square")
        if (squares.length <= 0) {
          expect(squares.length).toBeGreaterThan(0);
        } else {
          var randomI = Math.floor(Math.random() * squares.length)
          var randomSquare = squares[randomI]
          var input = document.getElementById('color-field')
          input.value = "red"
          var color = randomSquare.style.background || randomSquare.style.backgroundColor
          expect(color).toBe("red")
        }
        done()
      }
    })
  });
});
