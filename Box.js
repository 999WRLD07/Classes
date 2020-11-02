class Box
{

constructor(x, y, width, height )
{
    var options= {restitution : 0.3, friction:0.5, density:0.5 }

    this.body = Bodies.rectangle(x,y,50,height, options);
    this.width=50;
    this.height=height;
    World.add(world, this.body);
}

display()
{
 var pos = this.body.position;
 var angle = this.body.angle;

push();
translate(pos.x, pos.y);
  rotate(angle);  
rectMode(CENTER);
    rect(0,0, 50, this.height);
pop();
}

}