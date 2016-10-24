class PixartView {
  constructor(){
    this.swatch = []
    this.brushEl = $(".brush")
    this.input = $("#color-field")
    this.canvas = $(".canvas")
    this.color = null
    this.createCanvas()
    this.addEventToCanvas()
    $("form").on("submit", (evt) => {
      evt.preventDefault()
      this.setColor()
    })
  }
  getColor(){
    this.color = this.input.val()
    return this.color
  }
  setColor(){
    this.getColor()
    this.brushEl.css("background", this.color)
  }
  createCanvas(){
      for(let i = 0; i < 8000; i++){
        this.canvas.append($("<div class='square'></div>"))
      }
      this.squares = $(".square")
  }
  addEventToCanvas(){
    var self = this
    self.squares.on("mouseover", function (){
      $(this).css("background", self.color)
    })
  }
}
