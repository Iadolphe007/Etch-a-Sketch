const DEFAULT_COLOR = '#ffffff'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 20

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

blackBtn.onclick = () => setCurrentColor('#ffffff')
rainBtn.onclick = () => setCurrentMode('rainbow')
eraseBtn.onlick = () => setCurrentMode('erase')
resetBtn.onclick = () => cleanAll()
colorInput.oninput = (e) => setCurrentColor(e.target.value)
sizeValue.onmousemove = (e) => updateSize(e.target.value)
sizeInput.onchange = (e) => changeSize(e.target.value)

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

function cleanAll(){
    clearGrid()
    setGrid()
}

function clearGrid() {
    grid.innerHTML = ''
}

function setGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++){
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
    }
}

function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return
    if(currentMode === 'rainbow'){
        const R = Math.floor(Math.random() * 256)
        const G = Math.floor(Math.random() * 256)
        const B = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
    }else if(currentMode === 'black'){
        e.target.style.backgroundColor = currentColor
    }else if(currentMode === 'erase'){
        e.target.style.backgroundColor = '#f5f5f5'
    }
}

function activateButton(newMode) {
    if (currentMode === 'rainbow') {
      rainBtn.classList.remove('active')
    } else if (currentMode === 'black') {
      blackBtn.classList.remove('active')
    } else if (currentMode === 'erase') {
      eraseBtn.classList.remove('active')
    }
  
    if (newMode === 'rainbow') {
      rainBtn.classList.add('active')
    } else if (newMode === 'black') {
      blackBtn.classList.add('active')
    } else if (newMode === 'erase') {
      eraseBtn.classList.add('active')
    }
}

// function resetAll(){
//     const grids = document.querySelectorAll("#reset-btn")
//     grids.forEach((grid) =>{
//         write(grid, "while")
//     })
// }
window.onload = () => {
    setGrid(DEFAULT_SIZE)
    activateButton(DEFAULT_MODE)
  }