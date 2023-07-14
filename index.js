const DEFAULT_COLOR = '#add8e6'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 24

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE


const blackBtn = document.getElementById('black-btn')
const rainBtn = document.getElementById('rain-btn')
const eraseBtn = document.getElementById('erase-btn')
const resetBtn = document.getElementById('reset-btn')
const colorInput = document.getElementById('color-input')
const sizeInput = document.getElementById('range-input')
const sizeValue = document.getElementById('range-value')
const grid = document.getElementById('grid-sec')


function setCurrentColor(newColor) {
    currentColor = newColor
}
  
function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
}
  
function setCurrentSize(newSize) {
    currentSize = newSize
}

blackBtn.onclick = () => setCurrentColor('color')
rainBtn.onclick = () => setCurrentMode('rainbow')
eraseBtn.onlick = () => setCurrentMode('erase')
resetBtn.onclick = () => cleanAll()
colorInput.oninput = (e) => setCurrentColor(e.target.value)
sizeValue.onmousemove = (e) => updateSize(e.target.value)
sizeValue.onchange = (e) => changeSize(e.target.value)

let mouseDown = true
document.body.onmousedown = () => (mouseDown = true)
document.body.mouseup = () => (mouseDown = false)

function changeSize(value) {
    setCurrentSize(value)
    updateSize(value)
    cleanAll()
}

function updateSize(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}
