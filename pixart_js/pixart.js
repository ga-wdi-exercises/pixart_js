let setColors = document.querySelector('#set-color')
//setColor.addEventListener('click', changeBrushColor)
let brush = document.querySelector('.brush')
let newColor = document.getElementById('color-field')
let changeSqrs = document.querySelector('.square')

const changeBrushColor = function(e) {
    e.preventDefault()
    brush.style.backgroundColor = newColor.value
}

const changeSqrCol = function() {
    this.style.backgroundColor = newColor.value
}

const addDivs = function() {
    for (i=0; i < 8000; i++) {
        let newDivs = document.createElement('div')
        newDivs.classList.add('square')
        document.getElementsByTagName('body')[0].appendChild(newDivs)
        let newSqr = document.body.appendChild(newDivs)
        newSqr.addEventListener('mouseover', changeSqrCol)
    }
}
addDivs()



setColors.addEventListener('click', changeBrushColor)
setColors.addEventListener('keyup', changeBrushColor)
//changeSqrs.addEventListener('click', changeSqrCol)



//youll use preventDefault
//background.style.backgroundColor
//key up
//event.keycode
//event.target matches
//test