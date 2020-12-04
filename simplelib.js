var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var windowWidth = window.innerWidth - 25;
var windowHeight = window.innerHeight - 10;
var winwidth;
var winheight;
var frame_rate = 100;
var color = 'white';
var mouseX, mouseY;
window.onload = function() {
    setup();
    setInterval(draw, 1000/frame_rate);
}
function createWindow(width, height) {
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    winwidth = width;
    winheight = height;
    document.body.appendChild(canvas);
}
function background(funcColor) {
    color = funcColor;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, winwidth, winheight);
    document.body.appendChild(canvas);
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
onmousemove = function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}