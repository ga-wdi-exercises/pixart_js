
class PixartHw {
  constructor () {
    this.brush = $('.brush')
    this.input = $('#color-field')
    this.color = null
    this.addEvents()
    $('form').on('submit', (x) => {
      x.preventDefault()

      this.brushColor()
    })
  }
  inputColor () {
    this.color = this.input.val()
    return this.color
  }
  brushColor () {

    this.inputColor()
    this.brush.css('background', this.color)
  }
   
}
