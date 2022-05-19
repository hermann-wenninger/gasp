function Ball (radius, color) {
  this.radius = radius;
  this.color = color;
  this.x = 45;
  this.y = 120;
  this.vx = 0;
  this.vy = 0;
}

Ball.prototype.draw = function (context) {
	context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 3*Math.PI, true);
    context.closePath();
    context.fill();  
};
