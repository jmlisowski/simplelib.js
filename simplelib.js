const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight; 
var width;
var height;
var frame_rate = 100;
var color = 'white';
var call_draw;
window.onload =_=> {
    call_draw = true;
    document.title = 'simplelib.js window';
    setup();
    document.body.style.margin = '0px';
    if(call_draw) {
        setInterval(draw, 1000/frame_rate);
    } else if (!call_draw) {
        return;
    }
}
title = string => document.title = string;
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
rect = (x, y, width, height, color = 'black', stroke = false) => {
    if(stroke) {
        ctx.strokeStyle = color;
        ctx.strokeRect(x, y, width, height);
    } else if (!stroke) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }
    document.body.appendChild(canvas);
}
clearArea = (x, y, width, height) => ctx.clearRect(x, y, width, height);
triangle = (x1, y1, x2, y2, x3, y3, color = 'black', stroke = false) => {
    ctx.beginPath();
    if(stroke) {
        ctx.strokeStyle = color;
    } else if (!stroke) {
        ctx.fillStyle = color;
    }
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    if(stroke) {
        ctx.stroke();
    } else if (!stroke) {
        ctx.fill();
    }
    document.body.appendChild(canvas);
}
circle = (x, y, radius, color = 'black', stroke = false) => {
    ctx.beginPath();
    if(stroke) {
        ctx.strokeStyle = color;
    } else if (!stroke) {
        ctx.fillStyle = color;
    }
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    if(stroke) {
        ctx.stroke();
    } else if (!stroke) {
        ctx.fill();
    }
    document.body.appendChild(canvas);
}
text = (string, x, y, color = 'black') => {
    ctx.fillStyle = color;
    ctx.fillText(string, x, y);
    document.body.appendChild(canvas);
} 
addListener = (event, func) => canvas.addEventListener(event, func);
sleep = milliseconds => {
    const date = Date.now();
    let currentDate;
    do {
        currentDate = Date.now();
    } while(currentDate - date < milliseconds);
}
line = (x1, y1, x2, y2, width = 1, color = 'black', lineCap = 'butt') => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = lineCap;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
beginPath = (width = 1, color = 'black', lineCap = 'butt') => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = lineCap;
}
startPoint = (x, y) => ctx.moveTo(x, y);
vertex = (x, y) => ctx.lineTo(x, y);
endPath =_=> ctx.stroke();
onmousemove = e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
}
