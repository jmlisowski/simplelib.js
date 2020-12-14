const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight; 
var width;
var height;
var frame_rate = 100;
var color = 'white';
window.onload =_=> {
    setup();
    document.body.style.margin = '0px';
    setInterval(draw, 1000/frame_rate);
}
createCanvas = (canvasWidth, canvasHeight) => {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    width = canvasWidth;
    height = canvasHeight;
    document.body.appendChild(canvas);
}
background = funcColor => {color = funcColor}
clear =_=> {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createCanvas(canvas.width, canvas.height);
    background(color);
}
rect = (x, y, width, height, color = 'black') => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    document.body.appendChild(canvas);
}
circle = (x, y, radius, color = 'black') => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.fill();
    document.body.appendChild(canvas);
}
text = (string, x, y, color = 'black') => {
    ctx.fillStyle = color;
    ctx.fillText(string, x, y);
    document.body.appendChild(canvas);
} 
addListener = (event, func) => {canvas.addEventListener(event, func)}
sleep = milliseconds => {
    const date = Date.now();
    let currentDate;
    do {
        currentDate = Date.now();
    } while(currentDate - date < milliseconds);
}
line = (x1, y1, x2, y2, width = 1, color = 'black') => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
beginPath = (width = 1, color = 'black') => {
    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
}
startPoint = (x, y) => {ctx.moveTo(x, y)}
vertex = (x, y) => {ctx.lineTo(x, y)}
endPath =_=> {ctx.stroke()}
onmousemove = e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
}
