class Box
{
    constructor(x,y,widthrect,heightrect)
    {
        var options = {
            restitution: 1.0

        }
        this.body=Bodies.rectangle(x,y,widthrect,heightrect,options);
        this.width=widthrect;
        this.height=heightrect;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }

} 