const fs = require('fs')
const jsdom = require('jsdom')
const markup = fs.readFileSync("index.html", "utf8")



describe("Solution", function () {
  it("set's the brush box's background color when clicked", function (done) {
    jsdom.env({
      html: markup,
      scripts: "pixart.js",
      done: function (err, window) {
        if(err) console.log(err)
        let document = window.document
        let btn = document.getElementById('set-color')
        let input = document.getElementById('color-field')
        let box = document.querySelector(".brush")
        input.value = "red"
        btn.click()
        let color = box.style.background || box.style.backgroundColor
        expect(color).toBe("red")
        done()
      }
    })
  }) // ends backgroundColor
  it("Has 8000 .square divs", function (done) {
    jsdom.env({
      html: markup,
      scripts: "pixart.js",
      done: function (err, window) {
        if(err) console.log(err)
        let document = window.document
        let squares = document.querySelectorAll(".square")
        expect(squares.length).toBe(8000)
        done()
      }
    })
  }) // ends num squares
  it("when you hover over a square, that square's background changes color", function (done) {
    jsdom.env({
      html: markup,
      scripts: "pixart.js",
      done: function (err, window) {
        if(err) console.log(err)
        let document = window.document
        let squares = document.querySelectorAll(".square")
        let randomI = Math.floor(Math.random() * squares.length)
        let randomSquare = squares[randomI]
        // $(randomSquare).trigger("mouseover")

        expect(randomSquare.style.background).toBe("red")
        done()
      }
    })
  }) // ends hover
});
