class PixartView {
  constructor(){
    this.swatch = []
    this.brushEl = $(".brush")
    this.input = $("#color-field")
    this.canvas = $(".canvas")
    this.color = null

  }
  getColor(){
    this.color = this.input.val()
    return this.color
  }
  setColor(){
    this.getColor()
    this.brushEl.css("background", this.color)
  }
 
