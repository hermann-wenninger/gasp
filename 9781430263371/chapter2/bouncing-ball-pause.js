var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 

var radius = 20;
var color = "#0000ff";
var g = 11; // acceleration due to gravity
var x = 1;  // initial horizontal position
var y = 1;  // initial vertical position
var vx = 5;  // initial horizontal speed
var vy = 5;  // initial vertical speed
 
window.onload = init; 
 
function init() {
  canvas.addEventListener('mousedown',stopAnim,false);
  canvas.addEventListener('mouseup',startAnim,false);  
  startAnim();
};
 
function startAnim() {
  interval = setInterval(onEachStep, 1000/60); // 60 fps
} 
 
function stopAnim() {
  clearInterval(interval);
} 
 
function onEachStep() {
  vy += g; // gravity increases the vertical speed
  x += vx; // horizontal speed increases horizontal position 
  y += vy; // vertical speed increases vertical position
 
  if (y > canvas.height - radius){ // if ball hits the ground
    y = canvas.height - radius; // reposition it at the ground
    vy *= -.91; // then reverse and reduce its vertical speed
  }
  if (x > canvas.width + radius){ // if ball goes beyond canvas
    x = -radius; // wrap it around 
  }
  drawBall(); // draw the ball
};
 
function drawBall() {
    with (context){
        clearRect(0, 0, canvas.width, canvas.height); 
        fillStyle = color;
        beginPath();
        arc(x, y, radius, 0, 2*Math.PI, true);
        closePath();
        fill();
    };
};