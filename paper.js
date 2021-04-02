class Paper 
{
  constructor(x, y,radius) 
  {
    var options = 
    {
        'restitution':0.8,
        'friction':0.3,
        'density':1.2
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    
    this.image=loadImage("paper.png")
    
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke("");
    fill("grey");
    imageMode(CENTER);
    image(this.image, 0,-this.paperHeight/2,this.paperWidth, this.paperHeight)
    ellipse(0, 0, this.radius);
    pop();
  }
};