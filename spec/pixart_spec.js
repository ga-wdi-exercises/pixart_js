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
  })

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
  });

  it("when you click on a div with a class of square, that square's background changes color", function (done) {
    jsdom.env({
      html: markup,
      scripts: "pixart.js",
      done: function (err, window) {
        if(err) { console.log(err) }
        let document = window.document
        let squares = document.querySelectorAll(".square")
        let randomI = Math.floor(Math.random() * squares.length)
        let randomSquare = squares[randomI]
        let input = document.getElementById('color-field')
        input.value = "red"
        randomSquare.click();
        let color = randomSquare.style.background || randomSquare.style.backgroundColor
        expect(color).toBe("red")
        done()
      }
    })
  });
});
