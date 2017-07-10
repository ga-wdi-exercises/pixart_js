/* global $ */

class Pixart {
  constructor () {
    this.color
    this.brush = $('.brush')
    this.input = $('#color-field')
    $('#set-color').on('click', evnt => {
      evnt.preventDefault()
      this.makeColor()
    })
  }

  makeColor () {
    this.takeColor()
    this.brush.css('background', this.color)
  }
  takeColor () {
    this.color = this.input.val()
    return this.color
  }
}
