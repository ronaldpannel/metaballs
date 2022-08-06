

class Ball {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.dirX = Math.random() * -0.9
    this.dirY = Math.random() * -0.9;
    this.r = Math.random() * 50 + 10;
    this.hue = 260
    this.color = 'hsl('+ this.hue +',50%, 50%)'
    console.log(this.color)
  }
  edges(){
    if(this.x >= canvas.width - this.r || this.x <= 0 + this.r){
      this.dirX = this.dirX * -1
    }
    if (this.y >= canvas.height - this.r || this.y <= 0 + this.r) {
      this.dirY = this.dirY * -1;
    }
  }
  update() {
    this.x += this.dirX
    this.y += this.dirY
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}
