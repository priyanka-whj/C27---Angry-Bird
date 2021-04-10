class Log
{
    constructor(x, y, height, angle)
    {
        var options = {'restitution' : 0.8, 'friction' : 1}
        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = 20;
        this.bodyH = height;
        this.bodyA = angle;
        this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyW, this.bodyH, options);
        World.add(world,this.body);
        Matter.Body.setAngle(this.body, this.bodyA)
    }

    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.bodyW, this.bodyH);
        pop();     
    }
};
