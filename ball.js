class Ball {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, r, options);
      this.width = r;
      this.height = r;
      this.image= loadImage("paper.png");

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(RADIUS);
      fill("red");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  