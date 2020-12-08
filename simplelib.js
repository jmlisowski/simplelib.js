const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight; 
var width;
var height;
var frame_rate = 100;
var color = 'white';
window.onload = function() {
    setup();
    document.body.style.margin = '0px';
    setInterval(draw, 1000/frame_rate);
}
function createCanvas(canvasWidth, canvasHeight) {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    width = canvasWidth;
    height = canvasHeight;
    document.body.appendChild(canvas);
}
function background(funcColor) {
    color = funcColor;
}
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createCanvas(canvas.width, canvas.height);
    background(color);
}
function frameRate(fr) {
    frame_rate = fr;
    setInterval(draw, 1000/fr);
}
function rect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    document.body.appendChild(canvas);
}
function circle(x, y, radius, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.fill();
    document.body.appendChild(canvas);
}
function text(string, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillText(string, x, y);
    document.body.appendChild(canvas);
} 
function addListener(event, func) {
    canvas.addEventListener(event, func);
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate;
    do {
        currentDate = Date.now();
    } while(currentDate - date < milliseconds);
}
onmousemove = function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}
